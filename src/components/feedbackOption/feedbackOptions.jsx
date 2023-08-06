import PropTypes from 'prop-types';
import css from './feedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.list}>
      {options.map(option => (
        <button
          className={css.item}
          type="button"
          onClick={() => onLeaveFeedback(option)}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.protoTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
