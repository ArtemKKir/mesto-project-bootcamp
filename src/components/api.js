import { config, newPlaceName, newPlaceUrl, nameInput, jobInput, aveFormInput } from "../utils/constants";

export const getResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
};

export const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers,
    })
        .then(getResponse)
};

export const getUser = () => {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers,
    })
        .then(getResponse)
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
};

export const avatarChange = (avatar) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            avatar: aveFormInput.value
        })
    })
        .then(getResponse)
};

export const newCard = (name, link) => {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: newPlaceName.value,
            link: newPlaceUrl.value
        })
    })
        .then(getResponse)
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
}
