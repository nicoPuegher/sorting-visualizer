const getBarChartStyles = (state, styles) => {
	return state.displayChart
		? `${styles.container} ${styles.chart}`
		: `${styles.container}`;
};

export default getBarChartStyles;
