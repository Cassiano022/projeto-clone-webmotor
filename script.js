document.addEventListener('DOMContentLoaded', function() {
    // Banner Slider
    const banner = document.getElementById('banner');
    const images = banner.querySelectorAll('.banner-container img');
    const dotsContainer = document.createElement('div');
    dotsContainer.classList.add('banner-dots');
    banner.querySelector('.banner-container').appendChild(dotsContainer);

    let currentSlide = 0;

    // Criar dots para navegação
    images.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    function goToSlide(index) {
        images[currentSlide].classList.remove('active');
        dotsContainer.children[currentSlide].classList.remove('active');
        currentSlide = index;
        images[currentSlide].classList.add('active');
        dotsContainer.children[currentSlide].classList.add('active');
    }

    // Botões de navegação
    const prevButton = document.createElement('button');
    prevButton.innerHTML = '&#10094;';
    prevButton.classList.add('prev');
    const nextButton = document.createElement('button');
    nextButton.innerHTML = '&#10095;';
    nextButton.classList.add('next');

    banner.querySelector('.banner-container').appendChild(prevButton);
    banner.querySelector('.banner-container').appendChild(nextButton);

    prevButton.addEventListener('click', () => {
        const newIndex = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
        goToSlide(newIndex);
    });

    nextButton.addEventListener('click', () => {
        const newIndex = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
        goToSlide(newIndex);
    });

    // Autoplay do banner
    setInterval(() => {
        const newIndex = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
        goToSlide(newIndex);
    }, 5000);

    // Tabs e Subtabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            document.querySelector('.tab.active').classList.remove('active');
            tab.classList.add('active');
        });
    });

    document.querySelectorAll('.subtab').forEach(subtab => {
        subtab.addEventListener('click', (e) => {
            document.querySelector('.subtab.active').classList.remove('active');
            subtab.classList.add('active');
        });
    });

    // Popular carros em destaque (dados fictícios)
    const featuredCarsGrid = document.querySelector('#featured-cars .cars-grid');
    const featuredCars = [
        { marca: 'Fiat', modelo: 'Pulse', preco: 89900, imagem: 'pulse.jpg' },
        { marca: 'Chevrolet', modelo: 'Onix', preco: 79900, imagem: 'onix.jpg' },
        { marca: 'Volkswagen', modelo: 'T-Cross', preco: 119900, imagem: 't-cross.jpg' },
        { marca: 'Renault', modelo: 'Kwid', preco: 59900, imagem: 'kwid.jpg' }
    ];

    featuredCars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.classList.add('car-card');
        carCard.innerHTML = `
            <img src="${car.imagem}" alt="${car.marca} ${car.modelo}">
            <h3>${car.marca} ${car.modelo}</h3>
            <p>R$ ${car.preco.toLocaleString('pt-BR')}</p>
            <button>Ver Detalhes</button>
        `;
        featuredCarsGrid.appendChild(carCard);
    });
});