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
  children: PropTypes.node.isRequired,
};
