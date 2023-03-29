import { addDoc } from "@firebase/firestore";
import { User } from "src/@types/User";
import { userCollection } from "../userCollection";

export const createUser = async (user: User) => {
    const result = await addDoc<User>(userCollection, user);
    return result;
}