const setNewDimensions = (ref, setBarChart, setCurrentDimensions) => () => {
	if (ref.current) {
		const width = ref.current.offsetWidth;
		const height = ref.current.offsetHeight;

		setBarChart({ display: false, isSorted: false, array: [] });
		setCurrentDimensions({ width: width, height: height });
	}
};

export default setNewDimensions;
