// seletor css
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    // adicionar uma classe, quando se precionar qualquer tecla do teclado o mario ira pular
    mario.classList.add('jump');
    // função anonima
    setTimeout(() => {
        // quando a animação terminar, iremos remover para acionar novamente
        mario.classList.remove('jump');
    }, 500);
}
const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    console.log(pipePosition);
    console.log(marioPosition);

    if (pipePosition <= 80 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.left = `${marioPosition}px`;

        mario.src = 'images/marioGameOver.webp';
        mario.style.width = '80px';

        clearInterval(loop);
    }

}, 10)
document.addEventListener('keydown', jump);