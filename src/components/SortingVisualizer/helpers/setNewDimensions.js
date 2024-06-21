let currentAnimationToken = 0;

const setNewDimensions = (ref, setState, setCurrentDimensions) => {
	return () => {
		// Abort ongoing animations
		currentAnimationToken++;

		// Get new dimensions
		const { clientWidth: width, clientHeight: height } = ref.current;

		// Update state with new dimensions
		setCurrentDimensions({ width, height });

		// Clear the bar chart array to prevent errors during resize
		setState({
			displayChart: false,
			isAnimationActive: false,
			chartArray: [],
			containerWidth: 0,
			contanierHeight: 0,
		});
	};
};

export default setNewDimensions;
export { currentAnimationToken };
