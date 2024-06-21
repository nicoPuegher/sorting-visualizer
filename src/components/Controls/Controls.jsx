import Selector from '../Selector/Selector';

import PropTypes from 'prop-types';

import styles from './Controls.module.css';

function Controls({ state, onDisplay, onSubmit }) {
	return (
		<div className={styles.container}>
			<button onClick={onDisplay}>Generate</button>
			<Selector state={state} onSubmit={onSubmit} />
		</div>
	);
}

Controls.propTypes = {
	state: PropTypes.object.isRequired,
	onDisplay: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
};

export default Controls;
