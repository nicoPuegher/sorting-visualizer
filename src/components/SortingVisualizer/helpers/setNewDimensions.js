let currentAnimationToken = 0;

// Update chart dimensions when the screen size changes
const setNewDimensions = (chartRef, setState) => {
	return () => {
		// Abort ongoing animations
		currentAnimationToken++;

		// Get new dimensions
		const { clientWidth, clientHeight } = chartRef;

		// Clear the bar chart array to prevent errors during resize and update dimensions
		setState({
			displayChart: false,
			isAnimationActive: false,
			chartArray: [],
			containerDimensions: { width: clientWidth, height: clientHeight },
		});
	};
};

export default setNewDimensions;
export { currentAnimationToken };
