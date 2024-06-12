import { forwardRef } from 'react';

import generateBarChart from '../../helpers/generateBarChart.jsx';
import getBarChartStyles from '../../helpers/getBarChartStyles.js';
import PropTypes from 'prop-types';

import styles from './Chart.module.css';

const Chart = forwardRef(function Chart({ barChart }, ref) {
	const chart = generateBarChart(barChart, styles.bar);
	const barChartStyles = getBarChartStyles(barChart, styles);
	const content = barChart.display ? chart : <h2>Generate an array</h2>;

	return (
		<div className={barChartStyles} ref={ref}>
			{content}
		</div>
	);
});

Chart.propTypes = {
	barChart: PropTypes.object.isRequired,
};

export default Chart;
