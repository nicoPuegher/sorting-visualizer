import styles from './Controls.module.css';

function Controls({ onHandleShowBars }) {
	return (
		<div>
			<button className={styles.primary} onClick={onHandleShowBars}>
				Generate
			</button>
		</div>
	);
}

export default Controls;
