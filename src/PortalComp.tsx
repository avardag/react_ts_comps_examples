import React, { Component } from "react";
import ReactDOM from "react-dom";

type PortalProps = { children: React.ReactNode };

class Portal extends Component<PortalProps> {
  private el: HTMLDivElement = document.createElement("div");

  componentDidMount(): void {
    document.body.appendChild(this.el);
  }

  componentWillUnmount(): void {
    document.body.removeChild(this.el);
  }

  render(): React.ReactElement<PortalProps> {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

function Child() {
  // The click event on this button will bubble up to parent,
  // because there is no 'onClick' attribute defined
  return (
    <div className="modal">
      <button>Click</button>
    </div>
  );
}

class PortalComp extends Component<{}, { count: number }> {
  state = {
    count: 0,
  };
  handleClick = () => {
    // This will fire when the button in Child is clicked,
    // updating Parent's state, even though button
    // is not direct descendant in the DOM.
    this.setState(({ count }) => ({
      count: ++count,
    }));
  };
  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Number of clicks: {this.state.count}</p>
        <p>
          Open up the browser DevTools to observe that the button is not a child
          of the div with the onClick handler.
        </p>
        <Portal>
          <Child />
        </Portal>
      </div>
    );
  }
}

export default PortalComp;
