// тут изначально рендерились карточки до подключения функционала работы с сервером
import { name, job, aveImage, imagePopup, userId, template, imagePopupImage, imagePopupCaption, elements } from '../utils/constants.js'
import { getUser, getInitialCards, cardLike, cardLikeDelete, deleteCard } from './api.js';
import { openPopup } from "../utils/utils.js";

export const renderCard = (card) => {
    elements.prepend(createCard(card));
};

export const createCard = (res) => {
    const card = template.cloneNode(true);
    card.querySelector('.element__name').textContent = res.name;
    const renderLikes = () => card.querySelector('.element__like_count').textContent = res.likes.length;
    renderLikes();
    const cardId = res._id;
    const ownerId = res.owner._id;
    const liker = res.likes;
    const likeButton = card.querySelector('.element__like-btn');
    function myCard() {
        if (ownerId !== userId.id) {
            card.querySelector('.element__dlt-btn').classList.add('element__dlt-btn_hidden');
        }
    }
    myCard();
    card.querySelector('.element__dlt-btn').addEventListener('click', function () {
        deleteCard(cardId)
            .then(() => card.remove())
            .catch((err) => {
                console.log(err);
            });
    });

    for (let i = liker.length - 1; i >= 0; i--) {
        if (liker[i] !== userId.id) {
            likeButton.classList.add('element__like-btn_active');
        }
    }
    card.querySelector('.element__like-btn').addEventListener('click', function (evt) {
        if (evt.target.classList.contains('element__like-btn_active')) {
            cardLikeDelete(cardId)
                .then((res) => {
                    console.log(res.likes.length)
                })
                .then(() => evt.target.classList.remove('element__like-btn_active'));
        } else {
            if (!evt.target.classList.contains('element__like-btn_active')) {
                cardLike(cardId)
                    .then((res) => {
                        console.log(res.likes.length)
                    })
                    .then(() => evt.target.classList.add('element__like-btn_active'));
            }
        }
    }
    );

    const image = card.querySelector('.element__image');
    image.src = res.link;
    image.alt = `Изображение ${res.name}`;
    image.addEventListener('click', () => {
        imagePopupImage.src = res.link;
        imagePopupImage.alt = `Изображение ${res.name}`;
        imagePopupCaption.textContent = res.name;
        openPopup(imagePopup);
    });
    console.log(cardId);
    console.log(liker.length);
    console.log(ownerId);
    return card;
}

Promise.all([getUser(), getInitialCards()])
    .then((res) => {
        // тут установка данных пользователя res[0]
        name.textContent = res[0].name;
        job.textContent = res[0].about;
        aveImage.src = res[0].avatar;
        userId.id = res[0]._id;
        // и тут отрисовка карточек res[1]
        res[1].reverse().forEach((card) => renderCard(card))
    })
    .catch((err) => {
        console.log(err)
    });
