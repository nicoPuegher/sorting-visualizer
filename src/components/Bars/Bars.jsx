import styles from './Bars.module.css';

function Bars() {
	const message = <h2>Generate an array</h2>;

	return <div className={styles.container}>{message}</div>;
}

export default Bars;
