export const enableValidation = ({ formSelector, ...rest }) => {
    Array.from(document.querySelectorAll(formSelector)).forEach(formElement => {
        formElement.addEventListener('submit', (event) => {
            event.preventDefault()
        })
        setEventListeners(formElement, rest)
    })
}

const setEventListeners = (formElement, { inputSelector, submitButtonSelector, inactiveButtonClass, ...rest }) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);

    formElement.addEventListener('reset', () => {
        setTimeout(() => {
            disableButton(buttonElement, inactiveButtonClass);
        }, 0);
    })

    inputList.forEach(inputElement => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(inputElement);
            toggleButtonState(inputList, buttonElement, inactiveButtonClass);
        })
    })
    toggleButtonState(inputList, buttonElement, inactiveButtonClass)
}


const checkInputValidity = (formElement, inputElement, { inputErrorClass, errorClass }) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)

    if (inputElement.validity.valid) {
        hideInputError(formElement, inputElement, errorElement, inputErrorClass, errorClass)
    } else {
        showInputError(formElement, inputElement, errorElement, inputErrorClass, errorClass, inputElement.validationMessage)
    }
}

const showInputError = (formElement, inputElement, errorElement, inputErrorClass, errorClass, errorMessage) => {

    inputElement.classList.add(inputErrorClass)
    errorElement.classList.add(errorClass)
    errorElement.textContent = errorMessage
}

const hideInputError = (formElement, inputElement, errorElement, inputErrorClass, errorClass) => {

    inputElement.classList.remove(inputErrorClass)
    errorElement.classList.remove(errorClass)
    errorElement.textContent = ''
}

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    if (hasValidInput(inputList)) {
        disableButton(buttonElement, inactiveButtonClass)
    } else {
        enableButton(buttonElement, inactiveButtonClass)
    }
}

const hasValidInput = (inputList) => {
    return inputList.some(inputElement => {
        return !inputElement.validity.valid
    })
}

const enableButton = (buttonElement, inactiveButtonClass) => {

    buttonElement.classList.remove(inactiveButtonClass)
    buttonElement.disabled = false
}


const disableButton = (buttonElement, inactiveButtonClass) => {

    buttonElement.classList.add(inactiveButtonClass)
    buttonElement.disabled = true
}
