import { config, userId, template, imagePopup, imagePopupImage, imagePopupCaption, elements, newPlaceName, newPlaceUrl, nameInput, jobInput, name, job, aveImage, aveFormInput } from "../utils/constants";
import { openPopup, renderLoading, renderLoadingCard, renderLoadingProfile } from "../utils/utils.js";
import { handleFormSubmit, avaChange } from "../index.js";


export const getResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
};

////перенести функционал рендера карточек из апи в card.js 

const createCard = (res) => {
    const card = template.cloneNode(true);
    card.querySelector('.element__name').textContent = res.name;
    // card.querySelector('.element__like_count').textContent = res.likes.length;
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

    // этот цикл должен проверять есть ли у карточек мой лайк, если есть то лайк активен
    for (let i = liker.length - 1; i >= 0; i--) {
        if (liker[i] !== userId.id) {
            likeButton.classList.add('element__like-btn_active');
        }
    }
    //    добавить событию слушателя лайка отображение изменения количества лайков
    //      количество лайков нужно подтянуть из ответа сервера

    card.querySelector('.element__like-btn').addEventListener('click', function (evt) {
        if (evt.target.classList.contains('element__like-btn_active')) {
            cardLikeDelete(cardId)
            // .then((res) => {
            //     console.log(res.likes.length)
            // })
            .then(() => evt.target.classList.remove('element__like-btn_active'));

            
        } else {
            if (!evt.target.classList.contains('element__like-btn_active')) {                
                cardLike(cardId)
                // .then((res) => {
                //     console.log(res.likes.length)
                // })
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

const renderCard = (res) => {
    elements.prepend(createCard(res));
};

export const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers,
    })
        .then(getResponse)
        .then((res) => {
            for (let i = res.length - 1; i >= 0; i--) {
                renderCard(res[i]);
            }
        })
        .catch((err) => {
            console.log(err);
        });
};

export const getUser = () => {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers,
    })
        .then(getResponse)
        .then((res) => {
            name.textContent = res.name;
            job.textContent = res.about;
            aveImage.src = res.avatar;
            userId.id = res._id;
        })
        .catch((err) => {
            console.log(err);
        });
};

export const editUser = (name, job) => {
    renderLoadingProfile(true);
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: nameInput.value,
            about: jobInput.value
        })
    })
        .then(getResponse)
        .then((res) => {
            handleFormSubmit(res);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally((res) => {
            renderLoadingProfile(false);
        })
};

export const avatarChange = (avatar) => {
    renderLoading(true);
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            avatar: aveFormInput.value
        })
    })
        .then(getResponse)
        .then((res) => {
            avaChange(res);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally((res) => {
            renderLoading(false);
        })
};
export const newCard = (name, link) => {
    renderLoadingCard(true);
    return fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: newPlaceName.value,
            link: newPlaceUrl.value
        })
    })
        .then(getResponse)
        .then((res) => {
            renderCard(res);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally((res) => {
            renderLoadingCard(false);
        })
}


export const deleteCard = (_id) => {
    return fetch(`${config.baseUrl}/cards/${_id}`, {
        method: 'DELETE',
        headers: config.headers,
        body: JSON.stringify({
            _id: ''
        })
    })
        .then(getResponse)
        .catch((err) => {
            console.log(err);
        });
}

export const cardLike = (_id) => {
    return fetch(`${config.baseUrl}/cards/likes/${_id}`, {
        method: 'PUT',
        headers: config.headers,
        body: JSON.stringify({
            _id: ''
        })
    })
        .then(getResponse)
        .catch((err) => {
            console.log(err);
        });
}

export const cardLikeDelete = (_id) => {
    return fetch(`${config.baseUrl}/cards/likes/${_id}`, {
        method: 'DELETE',
        headers: config.headers,
        body: JSON.stringify({
            _id: ''
        })
    })
        .then(getResponse)
        .catch((err) => {
            console.log(err);
        });
}

export const getLikes = (_id) => {    //а может тут его надо получать
    return fetch(`${config.baseUrl}/cards/${_id}`, {
        headers: config.headers,
    })
        .then(getResponse)
        .then((res) => {
            someP = res.likes.length
            console.log(someP)
        })
        .catch((err) => {
            console.log(err);
        });
}