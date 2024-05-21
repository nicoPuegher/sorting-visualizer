import styles from './Controls.module.css';

function Controls({ onDisplay }) {
	return (
		<div>
			<button className={styles.primary} onClick={onDisplay}>
				Generate
			</button>
		</div>
	);
}

export default Controls;
