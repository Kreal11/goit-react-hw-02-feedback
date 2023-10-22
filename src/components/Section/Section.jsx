import { Component } from 'react';
import { StyledSectionTitle } from './Section.styled';
import { PropTypes } from 'prop-types';

export class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <div>
        <StyledSectionTitle>{title}</StyledSectionTitle>
        {children}
      </div>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.shape({
    props: PropTypes.shape({
      good: PropTypes.number,
      neutral: PropTypes.number,
      bad: PropTypes.number,
      total: PropTypes.number,
      positivePercentage: PropTypes.string,
    }).isRequired,
    props: PropTypes.shape({
      options: PropTypes.arrayOf(PropTypes.string.isRequired),
      onLeaveFeedback: PropTypes.func,
    }),
  }).isRequired,
  // children: PropTypes.node.isRequired,
};
