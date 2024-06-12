import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import generateGraph from '../../helpers/generateGraph.jsx';
import getStyles from '../../helpers/getStyles.js';
import styles from './Bars.module.css';

const Bars = forwardRef(function Bars({ barChart }, ref) {
	const graph = generateGraph(barChart, styles.bar);
	const customStyles = getStyles(barChart, styles);
	const content = barChart.display ? graph : <h2>Generate an array</h2>;

	return (
		<div className={customStyles} ref={ref}>
			{content}
		</div>
	);
});

Bars.propTypes = {
	barChart: PropTypes.object.isRequired,
};

export default Bars;
