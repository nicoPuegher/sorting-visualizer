import { forwardRef } from 'react';
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

export default Bars;
