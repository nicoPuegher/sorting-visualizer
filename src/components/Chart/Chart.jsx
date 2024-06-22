import { forwardRef } from 'react';

import generateChart from './utils/generateChart.jsx';
import getChartStyles from './utils/getChartStyles.js';
import PropTypes from 'prop-types';

import styles from './Chart.module.css';

const Chart = forwardRef(function Chart({ state }, ref) {
	const chart = generateChart(state.chartArray, styles.bar);
	const barChartStyles = getChartStyles(state.displayChart, styles);
	const content = state.displayChart ? chart : <h2>Generate an array</h2>;

	return (
		<div className={barChartStyles} ref={ref}>
			{content}
		</div>
	);
});

Chart.propTypes = {
	state: PropTypes.object.isRequired,
};

export default Chart;
