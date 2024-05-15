document.addEventListener("DOMContentLoaded", () => {

	const burger = document.querySelector('.burger');
	const menu = document.querySelector('.header--wrapper__menu');
	burger.addEventListener('click', () => {
		menu.classList.toggle('active');
		burger.classList.toggle('active');
	});

	let splidePlanets = document.querySelectorAll('.main--planets__slider');
	splidePlanets.forEach(slider => {
		let splideInstance = new Splide( slider, {
			type: 'slide',
			width: '100%',
			focus: 'center',
			start: 4,
			trimSpace: false,
			gap: '10px',
			perPage: 5,
			perMove: 1,
			pagination: false,
			speed: '300',
			drag: false,
			breakpoints: {
				1101: {
					perPage: 4,
					start: 3,
				},
				992: {
					drag: true,
					pagination: true,
					arrows: false,
					fixedWidth: '237px',
					focus: false,
					start: 0,
					gap: '20px',
				},
			}
		} ).mount();
		// Добавляем обработчик события для каждого слайда
		slider.querySelectorAll('.splide__slide').forEach((slide, index) => {
			slide.addEventListener('click', () => {
					// Перемещаем к выбранному слайду
					splideInstance.go(index);
					// Центрируем выбранный слайд
					splideInstance.go(index);
			});
		});
	});

	let splidePets = document.querySelectorAll('.main--pets__slider');
	splidePets.forEach(slider => {
		let splideInstance = new Splide( slider, {
			type: 'slide',
			width: '100%',
			focus: 'center',
			fixedWidth: '332px',
			fixedHeight: '490px',
			start: 3,
			trimSpace: false,
			gap: '90px',
			perPage: 3,
			perMove: 1,
			pagination: false,
			speed: '300',
			drag: false,
			breakpoints: {
				1101: {
					perPage: 3,
					start: 3,
				},
				992: {
					drag: true,
					pagination: true,
					arrows: false,
					fixedWidth: '210px',
					fixedHeight: '310px',
					focus: false,
					start: 0,
					gap: '20px',
				},
			}
		} ).mount();
		// Добавляем обработчик события для каждого слайда
		slider.querySelectorAll('.splide__slide').forEach((slide, index) => {
			slide.addEventListener('click', () => {
					// Перемещаем к выбранному слайду
					splideInstance.go(index);
					// Центрируем выбранный слайд
					splideInstance.go(index);
			});
		});
	});
});
