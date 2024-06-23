// Apply .chart class when displayChart state is true and remove it when is false
const getChartStyles = (displayChart, styles) => {
	return displayChart
		? `${styles.container} ${styles.chart}`
		: `${styles.container}`;
};

export default getChartStyles;
