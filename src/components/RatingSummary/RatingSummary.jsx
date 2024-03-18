import { Component } from 'react';
import css from './RatingSummary.module.css';

class RatingSummary extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  

  handleAddRating = (name) => {
  this.setState(prevState => ({ [name]: prevState[name] + 1})); 
  };

  countTotalFeedback= () => {
    return Object.values(this.state).reduce((a, b) => a + b, 0);
  }

countPositiveFeedbackPercentage = () => {
  const percentage =(this.state.good / this.countTotalFeedback() ??1) * 100; 
  return isNaN(percentage) ? 0 : percentage.toFixed(0);
}

  render() {
    const {good, neutral, bad} = this.state;

    return (
      <div className={css.container}>
        <h4 className={css.feedback}>Please Leave Feedback</h4>
        <ul className={css['buttons-container']}>
          <li>
            <button onClick={() => this.handleAddRating('good')}>Good</button>
          </li>
          <li>
            <button onClick={() => this.handleAddRating('neutral')}>Neutral</button>
          </li>
          <li>
            <button onClick={() => this.handleAddRating('bad')}>Bad</button>
          </li>
        </ul>

        <h4 className={css.stat}>Statistics</h4>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>

      </div>
    );
  }
}

export default RatingSummary;
