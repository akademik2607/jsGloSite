const togglePopUp = () => {
        const popup = document.querySelector('.popup'), 
            popupBtn = document.querySelectorAll('.popup-btn');
        const popupAnimation = () => {
            const popUpContent = document.querySelector('.popup-content');
                popUpContent.style.top = '-100%';
            const startAnimation  = () => {
                popUpContent.style.top = `${popUpContent.offsetTop + 5}px`; 
                if(popUpContent.offsetTop > 50) clearInterval(indexInterval);
            };
            const indexInterval = setInterval(startAnimation, 10);
        };

        popupBtn.forEach((element) => {
            element.addEventListener('click', () => {
                popup.style.display = 'block';

                if(window.screen.width >= 768)popupAnimation();
            });
        });
        popup.addEventListener('click', (event) => {
            let target = event.target;
            if(target.classList.contains('popup-close')){
                popup.style.display = 'none';
            }
            else{
                target = target.closest('.popup-content');
                if(!target){
                    popup.style.display = 'none';
                }
            }
        });
    };

export default togglePopUp;
