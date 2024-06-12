const updateDimensions = (ref, setBarChart, setDimensions) => () => {
	if (ref.current) {
		const width = ref.current.offsetWidth;
		const height = ref.current.offsetHeight;

		setBarChart({ display: false, isSorted: false, array: [] });
		setDimensions({ width: width, height: height });
	}
};

export default updateDimensions;
