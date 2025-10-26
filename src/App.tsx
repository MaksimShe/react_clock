import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type AppState = {
  hasClock: boolean;
};

export class App extends React.Component<unknown, AppState> {
  state: AppState = {
    hasClock: true,
  };

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState(prevState => ({
      hasClock: !prevState.hasClock,
    }));

    window.removeEventListener('contextmenu', this.handleRightClick);
    window.addEventListener('contextmenu', this.handleRightClick);
  };

  handleLeftClick = () => {
    this.setState({
      hasClock: true,
    });

    window.removeEventListener('click', this.handleLeftClick);
  };

  componentDidMount(): void {
    window.addEventListener('contextmenu', this.handleRightClick);
  }

  componentDidUpdate(): void {
    if (!this.state.hasClock) {
      window.addEventListener('click', this.handleLeftClick);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock />}
      </div>
    );
  }
}
