import { getInputValues } from "src/utils/getInputValues";
import { existUserByemail } from "@firestore/user/actions";

const formLogin = document.querySelector("form") as HTMLFormElement;


const onSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    const inputs = getInputValues(formLogin);
    console.log(inputs);


}

formLogin.addEventListener("submit", onSubmit);