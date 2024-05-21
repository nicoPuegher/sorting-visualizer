import PropTypes from 'prop-types';
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

Controls.propTypes = {
	onDisplay: PropTypes.func.isRequired,
};

export default Controls;
