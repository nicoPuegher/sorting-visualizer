const getChartStyles = (displayChart, styles) => {
	return displayChart
		? `${styles.container} ${styles.chart}`
		: `${styles.container}`;
};

export default getChartStyles;
