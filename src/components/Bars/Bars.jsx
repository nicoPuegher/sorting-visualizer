import styles from './Bars.module.css';

function Bars({ showBars }) {
	const content = showBars ? <h2>Bars</h2> : <h2>Generate an array</h2>;

	return <div className={styles.container}>{content}</div>;
}

export default Bars;
