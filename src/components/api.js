import { config, template, imagePopup, imagePopupImage, imagePopupCaption, elements, newPlaceName, newPlaceUrl, nameInput, jobInput, name, job, aveImage, aveFormInput } from "../utils/constants";
import { openPopup, renderLoading } from "../utils/utils.js";
import { handleFormSubmit, avaChange } from "../index.js";


export const getResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
};

// const buttonElementDelete = document.querySelector('.element__dlt-btn');

// createCard обрабатывает входящий от сервера массив карточек

const createCard = (res) => {
    const card = template.cloneNode(true);
    card.querySelector('.element__name').textContent = res.name;
    card.querySelector('.element__like_count').textContent = res.likes.length;
    const cardId = res._id;
    const ownerId = res.owner._id;
    const liker = res.likes;
    const likeButton = card.querySelector('.element__like-btn');
    // 1 в функции ниже myCard желательно избавится от хардкода, для этого нужно выцепить _id юзера наверное из функции getUser(она получает инфу о юзере от сервера) и закинуть в переменную допустим userId
    function myCard() {
        if (ownerId !== 'c09f2edd2592d72466e4203c') {
            card.querySelector('.element__dlt-btn').classList.add('element__dlt-btn_hidden');
        }
    }
    myCard();
    card.querySelector('.element__dlt-btn').addEventListener('click', function () {
        deleteCard(cardId)
            .then(() => card.remove())
    });
    
    for (let i = liker.length - 1; i >= 0; i--) {
        if (liker[i] !== 'c09f2edd2592d72466e4203c') {
            likeButton.classList.add('element__like-btn_active');
        }
    }
    //    2 дальше нужно подправить срабатывание слушателя нажатия лайка, запросы 'cardLike' 'cardLikeDelete' прописаны внизу команду на сервер они отправляют но результат не отображается в верстке

    card.querySelector('.element__like-btn').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like-btn_active');
        cardLike(cardId)
    });



    const image = card.querySelector('.element__image');
    image.src = res.link;
    image.alt = `Изображение ${res.name}`;
    image.addEventListener('click', () => {
        imagePopupImage.src = res.link;
        imagePopupImage.alt = `Изображение ${res.name}`;
        imagePopupCaption.textContent = res.name;
        openPopup(imagePopup);
    });

    console.log(card);
    console.log(cardId);
    console.log(liker.length);
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
        })
};

export const editUser = (name, job) => {
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
};

export const avatarChange = (avatar) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            avatar: aveFormInput.value
        })
    })
        .then((res) => {
            if (!res.ok) return Promise.reject(`Ошибка ${res.status}`);
        })
        .then((res) => {
            avaChange(res);
        })
};
export const newCard = (name, link) => {
    renderLoading(true);
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
        .finally((res) => {
            renderLoading(false);
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
        .then((res) => {
            console.log(res.likes);
        })
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
        .then((res) => {
            console.log(res.likes);
        })
}