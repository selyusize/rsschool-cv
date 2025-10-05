const button = document.querySelector('.icon-menu')
const menu = document.querySelector('.navigation-top')

export function initToggleMenu() {
	button.addEventListener('click', () => {
		menu.classList.toggle('navigation-top--active')
	})
}
