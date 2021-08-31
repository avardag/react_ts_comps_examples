import React, { Component } from "react";

type CounterState = {
  count: number;
};
type CounterProps = {
  title: string;
};

class Counter extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  static defaultProps: CounterProps = {
    title: "Default counter",
  };
  //lifecycle methods
  static getDerivedStateFromProps(
    nextProps: CounterProps,
    prevState: CounterState
  ): CounterState | null {
    return false ? { count: 2 } : null;
  }
  componentDidMount(): void {}
  shouldComponentUpdate(
    nextProps: CounterProps,
    nextState: CounterState
  ): boolean {
    return true;
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count + 1,
      };
    });
    // this.state.count = ++ this.state.count // this mistake is not possible to make in TS
  }

  render() {
    return (
      <div>
        <h2>
          {this.props.title} {this.state.count}
        </h2>
        <button type="button" onClick={() => this.handleClick()}>
          Click
        </button>
      </div>
    );
  }
}

export default Counter;
