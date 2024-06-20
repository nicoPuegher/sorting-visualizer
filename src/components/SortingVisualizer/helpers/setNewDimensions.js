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
			isSorted: false,
			array: [],
		});
	};

	// if (ref.current) {
	// 	const width = ref.current.offsetWidth;
	// 	const height = ref.current.offsetHeight;
	//
	// 	setBarChart({ display: false, isSorted: false, array: [] });
	// 	setCurrentDimensions({ width: width, height: height });
	// }
};

export default setNewDimensions;
export { currentAnimationToken };
