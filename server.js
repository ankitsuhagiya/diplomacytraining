require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname)));

// The backend endpoint for AI topic generation
app.post('/api/generate', async (req, res) => {
  const { topicText } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "API key is not configured on the server." });
  }

  if (!topicText) {
    return res.status(400).json({ error: "Missing topicText in request body." });
  }

  const modelsToTry = [
    "gemini-flash-latest",
    "gemini-2.5-flash",
    "gemini-3.5-flash",
    "gemini-pro-latest"
  ];
  
  const prompt = `You are an expert diplomatic instructor. The user wants to practice a free speech on the topic: "${topicText}".
1. Categorize this topic into one of the following categories:
   - International Law
   - Global Governance
   - European Union
   - Security & Defence
   - Development & Sustainability
   - Economics & Trade
   - Human Rights & Democracy
   - Diplomacy
   - Technology & Cyber
   - Migration & Refugees
   - History of International Relations
   - Foreign Policy & Area Studies
   If it doesn't perfectly fit, choose the closest one or "Diplomacy".
2. Generate exactly 3 relevant and challenging subtopics or questions that the user should address in their speech. Make them specific to the topic.
3. Return the result strictly in this JSON format:
{
  "category": "Selected Category",
  "subtopics": ["Subtopic 1", "Subtopic 2", "Subtopic 3"]
}
Do not include any markdown formatting, backticks, or extra text. Only return the JSON object.`;

  let lastError = null;

  for (const model of modelsToTry) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    try {
      // Assuming Node 18+ for native fetch.
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: prompt }]
          }],
          generationConfig: {
            temperature: 0.7
          }
        })
      });

      if (!response.ok) {
        let errMsg = `API returned status ${response.status}`;
        try {
          const errData = await response.json();
          if (errData.error && errData.error.message) {
            errMsg = errData.error.message;
          }
        } catch (e) {
          // Ignore parse error on error response
        }
        throw new Error(errMsg);
      }

      const data = await response.json();
      let resultText = data.candidates[0].content.parts[0].text;
      
      // Robustly extract JSON object from the response
      const jsonMatch = resultText.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error("Could not find a valid JSON object in the AI response.");
      }
      
      const parsedJson = JSON.parse(jsonMatch[0]);
      return res.json(parsedJson); // Successfully found and parsed!
    } catch (error) {
      console.warn(`Model ${model} failed:`, error.message);
      lastError = error;
      
      // If the API key is definitely invalid, stop trying other models
      if (error.message.includes("API key not valid") || error.message.includes("API key not valid. Please pass a valid API key.")) {
        return res.status(403).json({ error: "Invalid API Key configured on server." });
      }
    }
  }
  
  res.status(500).json({ error: "All AI models failed to generate content. Last error: " + (lastError ? lastError.message : "Unknown error") });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
