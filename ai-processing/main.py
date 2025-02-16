from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Proposal(BaseModel):
    proposal_id: int
    description: str

def analyze_proposal(description):
    risk_score = len(description) % 10  # Mock AI risk score
    return f"Risk Score: {risk_score}/10. Proposal Feasibility: High."

@app.post("/analyze_proposal")
def analyze(proposal: Proposal):
    report = analyze_proposal(proposal.description)
    return {"proposal_id": proposal.proposal_id, "ai_report": report}
