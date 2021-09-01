import React, { Component } from "react";

type Counter2State = {
  count: number;
};
type Counter2Props = {
  title: string;
};

class Counter2 extends Component<Counter2Props, Counter2State> {
  constructor(props: Counter2Props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(e: React.MouseEvent) {
  handleClick(e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) {
    console.log(`${e.clientX} - ${e.clientY}`);
    this.setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count + 1,
      };
    });
  }

  render() {
    return (
      <div>
        <h2>
          {this.props.title} {this.state.count}
        </h2>
        <a href="#" onClick={(e) => this.handleClick(e)}>
          Some Link
        </a>
        <button type="button" onClick={(e) => this.handleClick(e)}>
          Click
        </button>
      </div>
    );
  }
}

export default Counter2;
