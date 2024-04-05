import { FetchAllUsers, FetchUserData } from "./graph-api/fetchUserData";

const main = () => {
    // FetchUserData().catch(console.error);
    FetchAllUsers().catch(console.error);
}

main()