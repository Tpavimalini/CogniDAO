import React from "react";
import ProposalForm from "./components/ProposalForm";
import { WagmiConfig, createClient } from "wagmi";

const client = createClient();

const App = () => (
    <WagmiConfig client={client}>
        <div>
            <h1>Trustless AI-Powered DAO</h1>
            <ProposalForm />
        </div>
    </WagmiConfig>
);

export default App;
