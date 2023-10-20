import { Component } from 'react';
import { StyledSectionTitle } from './Section.styled';

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
