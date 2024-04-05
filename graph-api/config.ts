import { ClientCredentialRequest, Configuration } from "@azure/msal-node";
import 'dotenv/config';

const msalConfig: Configuration = {
    auth: {
        clientId: process.env.CLIENT_ID!,
        authority: `https://login.microsoftonline.com/${process.env.TENANT_ID}`,
        clientSecret: process.env.CLIENT_SECRET,
    }
}

const tokenRequest: ClientCredentialRequest = {
    scopes: ["https://graph.microsoft.com/.default"]
}

const apiConfig = {
    uri: "https://graph.microsoft.com/v1.0"
}

export const configuration = {
    msalConfig,
    tokenRequest,
    apiConfig
}