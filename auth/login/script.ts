import { getInputValues } from "../../src/utils/getInputValues";
import { existUserByemail } from "@firestore/user/actions";
import { hash } from "bcrypt-ts";

const formLogin = document.querySelector("form") as HTMLFormElement;


const onSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    const [ email, password ] = getInputValues(formLogin);
   
    
    

}

formLogin.addEventListener("submit", e => onSubmit(e));