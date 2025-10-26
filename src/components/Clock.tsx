/* eslint-disable @typescript-eslint/lines-between-class-members */
import React from 'react';

export class Clock extends React.Component {
  state = {
    today: new Date(),
    clockName: this.getRandomName(),
  };

  timerIdName: number = 0;
  timerIdDate: number = 0;

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
  };

  componentDidMount(): void {
    this.timerIdName = window.setInterval(() => {
      this.setState({
        clockName: this.getRandomName(),
      });
    }, 3300);

    this.timerIdDate = window.setInterval(() => {
      this.setState({
        today: new Date(),
      });
    }, 1000);
    // eslint-disable-next-line no-console
    console.log(this.state.today.toUTCString().slice(-12, -4));
  }

  componentWillUnmount(): void {
    clearInterval(this.timerIdName);
    clearInterval(this.timerIdDate);
  }

  getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.state.clockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
