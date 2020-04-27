export default (currentColor) => {
	let parts = currentColor.split('-')
	let currentColorLevel = parseInt(parts[1])
	
	return currentColorLevel < 900 ? `${parts[0]}-${currentColorLevel + 100}` : currentColor
}