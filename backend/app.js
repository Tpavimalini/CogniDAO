const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

app.post("/store-ai-report", async (req, res) => {
    const { proposalId, description } = req.body;
    try {
        const aiResponse = await axios.post("http://localhost:8000/analyze_proposal", {
            proposal_id: proposalId,
            description: description
        });

        const aiReport = aiResponse.data.ai_report;
        res.json({ success: true, proposalId, aiReport });
    } catch (error) {
        res.status(500).json({ error: "AI processing failed" });
    }
});

app.listen(3001, () => console.log("Backend running on port 3001"));
