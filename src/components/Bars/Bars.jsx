import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Bars.module.css';

const Bars = forwardRef(function Bars({ bars }, ref) {
	let graph = null;
	if (bars.arr) {
		graph = bars.arr.map((bar, index) => (
			<div
				key={index}
				className={styles.bar}
				style={{ height: `${bar}px` }}
			></div>
		));
	}

	const customStyles = bars.display
		? `${styles.container} ${styles.bars}`
		: `${styles.container}`;
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
