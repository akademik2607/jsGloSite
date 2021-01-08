
const sendForm = (formId) => {
    const errorMessage = 'Что то пошло не так...',
        loadMessage = 'Загрузка...',
        succesMessage = 'Спасибо! Мы скоро с Вами свяжемся!';
    const form = document.getElementById(formId),
        formInputs = form.querySelectorAll('input'),
        statusMessage = document.createElement('div'),
        popup = document.querySelector('.popup');
        statusMessage.style.cssText = 'font-size: 2rem; color: white',

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;

        const formData = new FormData(form),
            body = {};

        for(let val of formData.entries()){
            body[val[0]] = val[1];
        }

        formInputs.forEach((elem) => {
            elem.value = '';
        });

        postData(body)
        .then((response) => {
            if(response.status !== 200){
                throw new Error('Статус не 200!');
            }
            statusMessage.textContent = succesMessage;
            setTimeout(() => {
                statusMessage.textContent = '';
                popup.style.display = 'none';
            }, 5000);
            console.log(form);
        })
        .catch((error) => {
            console.error(error);
            statusMessage.textContent = errorMessage;
            setTimeout(() => statusMessage.textContent = '', 3000);
        });
        
    });
};


    const postData = (body) => {
            return fetch('./server.php',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)

            });
           
    };



const validForm = (event) => {

        const target = event.target;
            if(target.name === 'user_name'){
                target.value = target.value.replace(/[^А-Яа-я -]/, '');
                target.pattern = '[А-Яа-я -]{2,50}';
            }else if(target.name === 'user_phone'){
                target.value = target.value.replace(/[^\d\+]/, '');
                target.pattern = '[\\d+]{11,}';
            }else if(target.name === 'user_message'){
                target.value = target.value.replace(/[^\dА-Яа-я \.,\?\:\;\"\'!]/, '');
            }else if(target.name === 'user_email'){
                target.value = target.value.replace(/[^\w-@\.]/, '');
                target.pattern = '[\\w-]+@\\w+\\.[a-zA-z]{2,3}';
            }
             
        };

const formAction = () => {
    const forms = document.querySelectorAll('form');
    forms.forEach((elem) => {
        elem.addEventListener('input', validForm);
        sendForm(elem.id);
    });
};

export default formAction;
