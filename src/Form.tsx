import React, { Component } from "react";

type Position = {
  id: string;
  value: string;
  title: string;
};
type ShowData = {
  name: string;
  text: string;
  position: string;
};
type FormState = {
  inputText: string;
  textareaText: string;
  selectText: typeof DEFAULT_SELECT_VALUE;
  showData: ShowData;
};
// const SELECT_POSITIONS: Array<Position> = [
const SELECT_POSITIONS: Position[] = [
  {
    id: "fd",
    value: "Front-end Developer",
    title: "Front-end Developer",
  },
  {
    id: "bd",
    value: "Back-end Developer",
    title: "Back-end Developer",
  },
];
type FormProps = {};
const DEFAULT_SELECT_VALUE: string = SELECT_POSITIONS[0].value;
const styles: React.CSSProperties = { display: "block", marginBottom: "10px" };

class Form extends Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
    this.state = {
      inputText: "",
      textareaText: "",
      selectText: DEFAULT_SELECT_VALUE,
      showData: {
        name: "",
        text: "",
        position: "",
      },
    };
  }

  private rootRef = React.createRef<HTMLSelectElement>();

  handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    this.setState({ inputText: e.target.value });
  };

  handleTextareaChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ): void => {
    this.setState({ textareaText: e.target.value });
  };

  handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (
    e
  ): void => {
    this.setState({ selectText: e.target.value });
  };

  // handleShow: React.FormEventHandler = (e): void => {
  handleShow: React.MouseEventHandler<HTMLButtonElement> = (e): void => {
    e.preventDefault();
    const { inputText, textareaText, selectText } = this.state;

    this.setState({
      inputText: "",
      textareaText: "",
      selectText: DEFAULT_SELECT_VALUE,
      showData: {
        name: inputText,
        text: textareaText,
        position: selectText,
      },
    });
  };

  render() {
    const { inputText, textareaText, selectText, showData } = this.state;
    const { name, text, position } = showData;

    return (
      <>
        <h1>The Main Form</h1>
        <form>
          <label style={styles}>
            Name:
            <input
              type="text"
              value={inputText}
              onChange={this.handleInputChange}
            />
          </label>

          <label style={styles}>
            Text:
            <textarea
              value={textareaText}
              onChange={this.handleTextareaChange}
            />
          </label>

          <select
            style={styles}
            value={selectText}
            onChange={this.handleSelectChange}
            ref={this.rootRef}
          >
            {SELECT_POSITIONS.map(({ id, value, title }) => (
              <option key={id} value={value}>
                {title}
              </option>
            ))}
          </select>

          <button onClick={this.handleShow}>Show Data</button>
        </form>

        <h2>{name}</h2>
        <h3>{text}</h3>
        <h3>{position}</h3>
      </>
    );
  }
}

export default Form;
