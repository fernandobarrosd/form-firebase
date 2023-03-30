export const getInputValues = (form: HTMLFormElement) => {
    const inputs = Array.from(form.querySelectorAll("input"));
    const inputsValue = inputs.map(input => input.value);

    return inputsValue;
}