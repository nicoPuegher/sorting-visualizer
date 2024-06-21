let currentAnimationToken = 0;

const setNewDimensions = (ref, setBarChart, setCurrentDimensions) => {
	return () => {
		// Abort ongoing animations
		currentAnimationToken++;

		// Get new dimensions
		const { clientWidth: width, clientHeight: height } = ref.current;

		// Update state with new dimensions
		setCurrentDimensions({ width, height });

		// Clear the bar chart array to prevent errors during resize
		setBarChart({
			display: false,
			isAnimationGoing: false,
			array: [],
		});
	};
};

export default setNewDimensions;
export { currentAnimationToken };
