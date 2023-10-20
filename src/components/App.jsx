import { Component } from 'react';
import { StyledMainWrapper } from './Statistics/FeedbackStat.styled';
import { Statistics } from './Statistics/Statistics';

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
        <h1>PLEASE LEAVE FEEDBACK</h1>
        <button type="button" onClick={() => this.handleChangeStat('good')}>
          Good
        </button>
        <button type="button" onClick={() => this.handleChangeStat('neutral')}>
          Neutral
        </button>
        <button type="button" onClick={() => this.handleChangeStat('bad')}>
          Bad
        </button>
        <h2>Statistics</h2>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={totalFeedback}
          positivePercentage={totalPositiveFeedbacks}
        ></Statistics>
      </StyledMainWrapper>
    );
  }
}
