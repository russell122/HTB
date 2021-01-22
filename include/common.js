$(function () {

	// Мобильное меню
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$(".js-scroll-to-form").click(function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id = $(this).attr('href'),
			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1000 мс
		$('body,html').animate({ scrollTop: top }, 1000);
		$('.header__burger, .header__menu').removeClass('active');
		$('body').removeClass('lock');
	});

	// Jquery tabs
	$(".solution-tab").click(function () {
		var index = $(this).index();
		$(this).closest('.solution-tab-wrapper').find(".solution-tab").removeClass("solution-tab--active").eq(index).addClass("solution-tab--active");
		$(this).closest('.solution-tab-wrapper').find(".solution-tab-item").hide().eq(index).fadeIn("normal");
	});

	let solutionTabs = document.querySelectorAll('.solution-tab');
	let solutionTabWrapper = document.querySelector('.solution-tab-wrapper');
	let solutionTabItem = document.querySelectorAll('.solution-tab-item');

	window.addEventListener('resize', (e) => {

		solutionTabItem.forEach((el, i) => {
			if (window.screen.width < 575) {
				el.classList.remove('solution-tab-item-active1', 'solution-tab-item-active2', 'solution-tab-item-active3');
			} else {
				solutionTabs.forEach((elem, j) => {
					if (j == 0) {
						solutionTabItem[j].classList.add('solution-tab-item-active1')
					} else if (j == 1) {
						solutionTabItem[j].classList.add('solution-tab-item-active2')
					} else if (j == 2) {
						solutionTabItem[j].classList.add('solution-tab-item-active3')
					}
				})
			}
		})

	})

	solutionTabWrapper.addEventListener('click', (e) => {
		if (e.target.closest('.solution-tab')) {
			solutionTabs.forEach((elem, i) => {
				if (window.screen.width >= 575) {
					if (elem.classList.contains('solution-tab--active')) {
						if (i == 0) {
							solutionTabItem[i].classList.add('solution-tab-item-active1')
						} else if (i == 1) {
							solutionTabItem[i].classList.add('solution-tab-item-active2')
						} else if (i == 2) {
							solutionTabItem[i].classList.add('solution-tab-item-active3')
						}
					}
				}
			})
		}
	})



});