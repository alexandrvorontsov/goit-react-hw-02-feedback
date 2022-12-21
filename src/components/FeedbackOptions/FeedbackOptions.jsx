import React from 'react';
import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <ul className={style.list}>
        {options.map(option => {
          return (
            <li key={option}>
              <button
                className={style.btn}
                onClick={onLeaveFeedback}
                option={option}
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
