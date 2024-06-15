const getBarChartStyles = (barChart, styles) => {
	return barChart.display
		? `${styles.container} ${styles.chart}`
		: `${styles.container}`;
};

export default getBarChartStyles;
