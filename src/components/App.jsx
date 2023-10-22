import { Component } from 'react';
import { StyledMainWrapper } from './Statistics/Statistics.styled';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { PropTypes } from 'prop-types';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChangeStat = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? (good / total) * 100 : 0;
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const totalPositiveFeedbacks =
      this.countPositiveFeedbackPercentage().toFixed();
    return (
      <StyledMainWrapper>
        <Section title="PLEASE, LEAVE YOUR FEEDBACK">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleChangeStat}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={totalFeedback}
            positivePercentage={totalPositiveFeedbacks}
          />
        </Section>
      </StyledMainWrapper>
    );
  }
}

App.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
