const popupElement = document.querySelector('.popup');
const openPopupButtonElement = document.querySelector('.profile__edit-btn');
const closePopupButtonElement = document.querySelector('.popup__close-btn');

const template = document.querySelector('#element-template').content.querySelector('.element');

const elements = document.querySelector('.elements');
const add = document.querySelector('.profile__add-btn');
const placeForm = document.querySelector('.popup_place');
const closeAddForm = document.querySelector('.popup_place__close-btn');
add.addEventListener('click', function() {
    placeForm.classList.add('popup_opened');
})
closeAddForm.addEventListener('click', function() {
    placeForm.classList.remove('popup_opened');
})


const imagePopup = document.querySelector('.popup_picture');
const imagePopupImage = imagePopup.querySelector('.popup__image');
const imagePopupCaption = imagePopup.querySelector('.popup__caption');

const createCard = (data) => {
    const card = template.cloneNode(true);
    card.querySelector('.element__name').textContent = data.name;
    card.querySelector('.element__dlt-btn').addEventListener('click', handleDeleteCard);
    const image = card.querySelector('.element__image');
    image.src = data.link;
    image.alt = `Изображение ${data.name}`;
    image.addEventListener('click', () => {
      imagePopupImage.src = data.link;
      imagePopupImage.alt = `Изображение ${data.name}`;
      imagePopupCaption.textContent = data.name;
    });
    console.log(card);
    
    return card;
}

const handleDeleteCard = (event) => {
    event.target.closest('.element').remove();
}

const createPlaceButton = placeForm.querySelector('.form__submit-btn_place');
const newPlaceName = placeForm.querySelector('.input-place');
const newPlaceUrl = placeForm.querySelector('.input-url');

createPlaceButton.addEventListener('click', (event) => {
    event.preventDefault();
    const name = newPlaceName.value;
    const link = newPlaceUrl.value;
    renderCard({name, link});
});

const renderCard = (data) => {
    elements.prepend(createCard(data));
};

for (let i = initialCards.length - 1; i >= 0; i--) {
    renderCard(initialCards[i]);
}

function openPopup() {
    popupElement.classList.add("popup_opened");
}

function closePopup() {
    document.querySelector(".popup_opened").classList.remove("popup_opened");
}

openPopupButtonElement.addEventListener('click', function() {
    openPopup();
});

closePopupButtonElement.addEventListener('click', function() {
    closePopup();
});

const openPicturePopupButtonElement = document.querySelectorAll('.element__image');
const closePicturePopupButtonElement = document.querySelectorAll('.popup_picture__close-btn');
const picturePopup = document.querySelector('.popup__image');
const popupImage = document.querySelector('.element__image');

Array.from(openPicturePopupButtonElement).map(function (openPicturePopupButtonElement) {
    openPicturePopupButtonElement.addEventListener('click', function() {
        document.querySelector('.popup_picture').classList.add('popup_opened');
    });
});

Array.from(closePicturePopupButtonElement).map(function(closePicturePopupButtonElement) {
    closePicturePopupButtonElement.addEventListener('click', function() {
        document.querySelector('.popup_picture').classList.remove('popup_opened');
    });
});

let likeButtonElement = document.querySelectorAll('.element__like-btn');

Array.from(likeButtonElement).map(function (likeButtonElement) {
    likeButtonElement.addEventListener('click', function() {
        likeButtonElement.classList.toggle('element__like-btn_active');
    });
});

const form = document.querySelector('.form');
// Находим поля формы в DOM
const nameInput = form.querySelector('.name-input');
const jobInput = form.querySelector('.job-input');
const nameField = document.querySelector('.profile__title').textContent;
const jobField = document.querySelector('.profile__subtitle').textContent;
nameInput.value = nameField;
jobInput.value = jobField;

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    nameInput.getAttribute('value');
    jobInput.getAttribute('value');
   // Выберите элементы, куда должны быть вставлены значения полей
   
    // Вставьте новые значения с помощью textContent
nameField.textContent = nameInput.value;
jobField.textContent = jobInput.getAttribute('value');
}
form.addEventListener('submit', handleFormSubmit);
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
/*

form.addEventListener('submit', function(event) {
    event.preventDefault();
});*/