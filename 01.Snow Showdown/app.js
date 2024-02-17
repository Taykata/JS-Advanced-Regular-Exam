window.addEventListener("load", solve);

function solve() {
    const inputs = {
        snowmanName: document.getElementById('snowman-name'),
        snowmanHeight: document.getElementById('snowman-height'),
        location: document.getElementById('location'),
        creatorName: document.getElementById('creator-name'),
        specialAttribute: document.getElementById('special-attribute')
    }

    const addBtn = document.querySelector('button');

    addBtn.addEventListener('click', onAddClick);

    const snowmanPreview = document.querySelector('.snowman-preview');
    const snowList = document.querySelector('.snow-list');

    function onAddClick(event) {
        event.preventDefault();

        if (
            inputs.snowmanName.value === '' ||
            inputs.snowmanHeight.value === '' ||
            inputs.location.value === '' ||
            inputs.creatorName.value === '' ||
            inputs.specialAttribute.value === ''
        ) {
            return;
        }

        const result = createPreview(inputs.snowmanName.value, inputs.snowmanHeight.value, inputs.location.value, inputs.creatorName.value, inputs.specialAttribute.value);
        snowmanPreview.appendChild(result);

        inputs.snowmanName.value = '';
        inputs.snowmanHeight.value = '';
        inputs.location.value = '';
        inputs.creatorName.value = '';
        inputs.specialAttribute.value = '';
        addBtn.disabled = true;
    }

    function createInfo(snowmanName, snowmanHeight, location, creatorName, specialAttribute) {
        const element = e('li');
        element.className = 'snowman-info';

        const article = e('article');
        article.appendChild(e('p', `Name: ${snowmanName}`));
        article.appendChild(e('p', `Height: ${snowmanHeight}`));
        article.appendChild(e('p', `Location: ${location}`));
        article.appendChild(e('p', `Creator: ${creatorName}`));
        article.appendChild(e('p', `Attribute: ${specialAttribute}`));

        element.appendChild(article);

        return element;
    }

    function createPreview(snowmanName, snowmanHeight, location, creatorName, specialAttribute) {
        const element = createInfo(snowmanName, snowmanHeight, location, creatorName, specialAttribute);

        const divElement = e('div');
        divElement.className = 'btn-container';

        const editBtn = e('button', 'Edit');
        editBtn.className = 'edit-btn';
        editBtn.addEventListener('click', () => onEditClick(snowmanName, snowmanHeight, location, creatorName, specialAttribute));

        const nextBtn = e('button', 'Next');
        nextBtn.className = 'next-btn';
        nextBtn.addEventListener('click', onNextClick.bind(null, snowmanName, snowmanHeight, location, creatorName, specialAttribute));

        divElement.appendChild(editBtn);
        divElement.appendChild(nextBtn);
        element.appendChild(divElement);

        return element;

    }

    function onEditClick(snowmanName, snowmanHeight, location, creatorName, specialAttribute) {
        inputs.snowmanName.value = snowmanName;
        inputs.snowmanHeight.value = snowmanHeight;
        inputs.location.value = location;
        inputs.creatorName.value = creatorName;
        inputs.specialAttribute.value = specialAttribute;

        snowmanPreview.innerHTML = '';

        addBtn.disabled = false;
    }

    function onNextClick(snowmanName, snowmanHeight, location, creatorName, specialAttribute) {
        const result = createSnowman(snowmanName, snowmanHeight, location, creatorName, specialAttribute);
        snowList.appendChild(result);
        snowmanPreview.innerHTML = '';

    }

    function createSnowman(snowmanName, snowmanHeight, location, creatorName, specialAttribute) {
        const element = createInfo(snowmanName, snowmanHeight, location, creatorName, specialAttribute);

        const sendBtn = e('button', 'Send');
        sendBtn.className = 'send-btn';

        element.querySelector('article').appendChild(sendBtn);

        sendBtn.addEventListener('click', onSendClick);

        return element;
    }

    function onSendClick(event) {
        const main = document.querySelector('main');
        main.innerHTML = '';

        const backBtn = document.createElement('button');
        backBtn.textContent = 'Back';
        backBtn.addEventListener('click', onBackClick);

        const body = document.querySelector('body');
        body.appendChild(backBtn);

        const img = document.getElementById('back-img');
        img.hidden = false;
    }

    function onBackClick(event) {
        location.reload();
    }

    function e(type, content) {
        const element = document.createElement(type);

        if (content) {
            element.textContent = content;
        }

        return element;
    }
}