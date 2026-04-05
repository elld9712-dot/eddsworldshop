let cartCount = 0;
const cartBtn = document.getElementById('cart-btn');
const buyButtons = document.querySelectorAll('.buy-btn');

buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartBtn.innerText = `Кошик (${cartCount})`;
        
        // Маленька анімація кнопки
        button.innerText = 'Додано!';
        button.style.background = '#2ecc71';
        
        setTimeout(() => {
            button.innerText = 'Додати в кошик';
            button.style.background = '#333';
        }, 1000);
    });
});
