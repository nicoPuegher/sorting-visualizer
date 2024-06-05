import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import generateGraph from '../../helpers/generateGraph.jsx';
import getStyles from '../../helpers/getStyles.js';
import styles from './Bars.module.css';

const Bars = forwardRef(function Bars({ bars }, ref) {
	const graph = generateGraph(bars, styles.bar);
	const customStyles = getStyles(bars, styles);
	const content = bars.display ? graph : <h2>Generate an array</h2>;

	return (
		<div className={customStyles} ref={ref}>
			{content}
		</div>
	);
});

Bars.propTypes = {
	bars: PropTypes.object.isRequired,
};

export default Bars;
