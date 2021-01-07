    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn');
        const actionMenu = () =>{
            menu.classList.toggle('active-menu');

        };

        btnMenu.addEventListener('click', actionMenu); 
                menu.addEventListener('click', (event) => {
            let target = event.target,
            targetLi = target.closest('menu ul li');
            if(target === closeBtn || targetLi){
                actionMenu();        
            }
        });

    };

export default toggleMenu;
