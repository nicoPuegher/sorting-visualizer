import Selector from '../Selector/Selector';

import PropTypes from 'prop-types';

import styles from './Controls.module.css';

// Allow user to generate a new chart or start a sorting animation
function Controls({ isAnimationActive, onDisplay, onSubmit }) {
	return (
		<div className={styles.container}>
			<button onClick={onDisplay}>Generate</button>
			<Selector
				isAnimationActive={isAnimationActive}
				onSubmit={onSubmit}
			/>
		</div>
	);
}

Controls.propTypes = {
	isAnimationActive: PropTypes.bool.isRequired,
	onDisplay: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
};

export default Controls;
