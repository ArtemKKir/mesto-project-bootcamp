/*import { template, imagePopup, imagePopupImage, imagePopupCaption } from "../utils/constants.js";
import { initialCards } from "./data.js";
import { openPopup } from "../utils/utils.js";
import { getInitialCards, getResponse } from "./api.js";

(export const createCard = (data) => {
    const card = template.cloneNode(true);
    card.querySelector('.element__name').textContent = data.name;
    card.querySelector('.element__dlt-btn').addEventListener('click', handleDeleteCard);
    card.querySelector('.element__like-btn').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like-btn_active');
    });
    const image = card.querySelector('.element__image');
    image.src = data.link;
    image.alt = `Изображение ${data.name}`;
    image.addEventListener('click', () => {
        imagePopupImage.src = data.link;
        imagePopupImage.alt = `Изображение ${data.name}`;
        imagePopupCaption.textContent = data.name;
        openPopup(imagePopup);
    });

    console.log(card);

    return card;
}

export const handleDeleteCard = (event) => {
    event.target.closest('.element').remove();
}

const renderCard = (data) => {
    elements.prepend(createCard(data));
};

for (let i = initialCards.length - 1; i >= 0; i--) {
    renderCard(initialCards[i]);
}

export {renderCard}
*/