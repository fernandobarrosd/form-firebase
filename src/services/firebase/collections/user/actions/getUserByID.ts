import { getDoc, doc } from "@firebase/firestore"
import { User } from "src/@types/User";
import { userCollection } from "../userCollection";

export const getUserByID = async (id: string) => {
   const userDocRef = doc<User>(userCollection, id);
   const user = await getDoc<User>(userDocRef);
   return user;
}