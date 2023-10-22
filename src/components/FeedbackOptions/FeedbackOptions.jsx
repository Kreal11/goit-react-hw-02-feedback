import { Component } from 'react';
import { StyledBtn, StyledBtnWrapper } from './FeedbackOpt.styled';
import { nanoid } from 'nanoid';
import { PropTypes } from 'prop-types';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <StyledBtnWrapper>
        {options.map(option => (
          <StyledBtn
            key={nanoid()}
            color={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </StyledBtn>
        ))}
      </StyledBtnWrapper>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
