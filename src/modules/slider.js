const slider = () => {

        const addDots = (slide) => {
            const portfolioDots = document.querySelector('.portfolio-dots');
            for(let i = 0; i < slide.length; ++i){
                let newDot = document.createElement('li');
                newDot.classList.add('dot');
                portfolioDots.append(newDot);
            }
        };

        const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn');
        
        addDots(slide);
        const dot = document.querySelectorAll('.dot'),
            slider = document.querySelector('.portfolio-content');

        let currentSlide = 0,
        interval;
        dot[currentSlide].classList.add('dot-active');
        
        const prevSlide = (element, index, strClass) => {
            element[index].classList.remove(strClass);
        };

        const nextSlide = (element, index, strClass) => {
            element[index].classList.add(strClass);
        };


        const autoPlaySlide = () => {
            prevSlide(dot, currentSlide, 'dot-active');
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            currentSlide++;
            if(currentSlide >= slide.length){
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
           interval = setInterval(autoPlaySlide, time); 
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;

            if(!target.matches('.portfolio-btn, .dot')){
                return;    
            }
            prevSlide(dot, currentSlide, 'dot-active');
            prevSlide(slide, currentSlide, 'portfolio-item-active');

            if(target.matches('#arrow-right')){
                currentSlide++;
            }else if (target.matches('#arrow-left')){
                currentSlide--;
            }else if (target.matches('.dot')){
                dot.forEach((item, index) => {
                    if(item === target){
                        currentSlide = index;
                    }
                });
            }
            if(currentSlide >= slide.length){
                currentSlide = 0;
            }
            if(currentSlide < 0){
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
            
        });

        slider.addEventListener('mouseover', (event) => {
            if(event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot')){
                stopSlide();
            }

        });

        slider.addEventListener('mouseout', (event) => {
            if(event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot')){
                startSlide();
            }
        });
        startSlide(1500);
    };

export default slider;
