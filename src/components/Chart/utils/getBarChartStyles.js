const getBarChartStyles = (displayChart, styles) => {
	return displayChart
		? `${styles.container} ${styles.chart}`
		: `${styles.container}`;
};

export default getBarChartStyles;
