import { getInputValues } from "../../src/utils/getInputValues";

import { hash } from "bcrypt-ts";
import { createUser, existUserByemail } from "@firestore/user/actions";


const formLogin = document.querySelector("form") as HTMLFormElement;


const onSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    const [ username, email, password ] = getInputValues(formLogin);
    const hashEmail = await hash(email, 10);
    const hashPassword = await hash(password, 10);
    const existisEmail = await existUserByemail(hashEmail);

    if (!existisEmail) {
       const result =  await createUser({
        username,
        email: hashEmail,
        password: hashPassword
       });
    }
    

}

formLogin.addEventListener("submit", e => onSubmit(e));