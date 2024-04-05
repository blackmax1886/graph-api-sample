import { ConfidentialClientApplication } from "@azure/msal-node";
import { configuration } from "./config";

export async function getAccessToken() {
    const msalClient = new ConfidentialClientApplication(configuration.msalConfig)
    try {
        const authResponse = await msalClient.acquireTokenByClientCredential(configuration.tokenRequest)
        return authResponse?.accessToken
    } catch (error) {
        console.log(error)
        throw new Error("Error acquireing access token")
    }
}