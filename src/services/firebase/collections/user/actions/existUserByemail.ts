import { query, where, getDocs } from "firebase/firestore";
import { userCollection } from "../userCollection";

export const existUserByemail = async (email: string) => {
    const userQuery = query(userCollection, where("email", "==", email));
    const user = await getDocs(userQuery);

   if (user.docs.length !== 1) {
        return false;
   }
   else {
    return true;
   }
}