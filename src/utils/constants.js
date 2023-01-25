export const template = document.querySelector('#element-template').content.querySelector('.element');
export const elements = document.querySelector('.elements');
export const imagePopup = document.querySelector('.popup_picture');
export const imagePopupImage = imagePopup.querySelector('.popup__image');
export const imagePopupCaption = imagePopup.querySelector('.popup__caption');

export const popup = document.querySelector('.popup');
export const profilePopup = document.querySelector('.profile-popup');
export const placeForm = document.querySelector('.popup_place');
export const cardForm = placeForm.querySelector('.form_place');
export const buttonClosePopupImage = document.querySelector('.popup_picture__close-btn');
export const buttonOpenAvePopup = document.querySelector('.profile__image_edit');
export const avePopup = document.querySelector('.ave-popup');
export const aveForm = document.querySelector('.form_ave');
export const aveFormInput = document.querySelector('.input-url_ave');
export const aveImage = document.querySelector('.profile__image');
export const buttonLoading = document.querySelector('.form__submit-btn');

const openPopupButtonElement = document.querySelector('.profile__edit-btn');
const closePopupButton = document.querySelector('.popup__close-btn_profile');
const placePopupOpen = document.querySelector('.profile__add-btn');
const placePopupClose = document.querySelector('.popup_place__close-btn');
const avePopupClose = document.querySelector('.popup__close-btn_ave');
const body = document.querySelector('.body');

const newPlaceName = placeForm.querySelector('.input-place');
const newPlaceUrl = placeForm.querySelector('.input-url');

const form = document.querySelector('.form_profile');
const nameInput = form.querySelector('.name-input');
const jobInput = form.querySelector('.job-input');
const name = document.querySelector('.profile__title');
const job = document.querySelector('.profile__subtitle');

export { avePopupClose, openPopupButtonElement, closePopupButton, placePopupOpen, placePopupClose, body, newPlaceUrl, newPlaceName, form, nameInput, jobInput, name, job };

export const config = {
  baseUrl: 'https://nomoreparties.co/v1/wbf-cohort-4',
  headers: {
    'Authorization': 'e14450da-01ef-426a-8180-a1ba601a97ba',
    'Content-Type': 'application/json'
  }
}