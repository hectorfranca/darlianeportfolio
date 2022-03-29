const activeAnimation = (className, index, animation) => {
    window.addEventListener('scroll', () => {
        const element = document.getElementsByClassName(className)[index];
        const position = element.getBoundingClientRect();

        if (position.top <= 600) {
            element.classList.add(animation);
        }
    });
}

export default activeAnimation;