function createParallax() {
	const layers = document.getElementsByClassName('parallax')

	window.addEventListener('scroll', function (event) {
		const top = this.pageYOffset
		for (const layer of layers) {
			const speed = layer.getAttribute('data-speed')
			const yPos = -((top * speed) / 100)
			layer.setAttribute(
				'style',
				`transform: translate3d(-50%, ${yPos}px, 0px)`
			)
		}
	})
}

document.body.onload = function () {
	createParallax()
}
