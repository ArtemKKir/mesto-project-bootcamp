export const template = document.querySelector('#element-template').content.querySelector('.element');
export const elements = document.querySelector('.elements');
export const imagePopup = document.querySelector('.popup_picture');
export const imagePopupImage = imagePopup.querySelector('.popup__image');
export const imagePopupCaption = imagePopup.querySelector('.popup__caption');

export const popup = document.querySelector('.popup');
export const profilePopup = document.querySelector('.profile-popup');
export const placeForm = document.querySelector('.popup_place');
export const cardForm = placeForm.querySelector('.form_place');

const openPopupButtonElement = document.querySelector('.profile__edit-btn');
const closePopupButton = document.querySelector('.popup__close-btn');
const openPlacePopup = document.querySelector('.profile__add-btn');
const closePlacePopup = document.querySelector('.popup_place__close-btn');
const body = document.querySelector('.body');

const newPlaceName = placeForm.querySelector('.input-place');
const newPlaceUrl = placeForm.querySelector('.input-url');

const form = document.querySelector('.form');
const nameInput = form.querySelector('.name-input');
const jobInput = form.querySelector('.job-input');
const nameField = document.querySelector('.profile__title');
const jobField = document.querySelector('.profile__subtitle');

export {openPopupButtonElement, closePopupButton, openPlacePopup, closePlacePopup, body, newPlaceUrl, newPlaceName, form, nameInput, jobInput, nameField, jobField}