import { Component } from 'react';
import { StyledBtn, StyledBtnWrapper } from './FeedbackOpt.styled';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <StyledBtnWrapper>
        {options.map(option => (
          <StyledBtn
            key={crypto.randomUUID}
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
