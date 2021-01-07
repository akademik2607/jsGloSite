const togglePhoto = () => {
    const command = document.getElementById('command');

    const swapPhoto = (event) => {
        const target = event.target;
        if(!target.matches('.command__photo')){
            return;
        }
    const tempData = target.src;
        target.src = target.dataset.img;
        target.dataset.img = tempData;
    }

    command.addEventListener('mouseover', swapPhoto); 
    command.addEventListener('mouseout', swapPhoto);
};

export default togglePhoto;
