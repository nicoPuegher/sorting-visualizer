const updateDimensions = (ref, setBars, setDimensions) => () => {
	if (ref.current) {
		const width = ref.current.offsetWidth;
		const height = ref.current.offsetHeight;

		setBars({ display: false, sorted: false, arr: [] });
		setDimensions({ width: width, height: height });
	}
};

export default updateDimensions;
