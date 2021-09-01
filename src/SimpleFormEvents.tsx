import React, { Component } from "react";
import { AuthContext } from "./AuthContext";

type FProps = {};
class SimpleFormEvents extends Component<FProps, { password: string }> {
  constructor(props: FProps) {
    super(props);
    this.state = { password: "" };
  }
  // Inner component (new syntax of static property)
  static contextType = AuthContext;
  context!: React.ContextType<typeof AuthContext>;
  ///////////////////////////////////////////////////////////////////////////////
  //handleFocus = (e: React.SyntheticEvent) => {
  // handleFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
  handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(e.currentTarget);
  };
  handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    this.setState({ password: e.target.value });
  };
  /////////////////////////////////////////////////////////////////////////////
  // handleSubmit = (e: React.SyntheticEvent) => {
  // handleSubmit:React.FormEventHandler<HTMLFormElement> = (e) => {
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (this.state.password === "password123") {
      this.context.login();
    }
  };
  //Render
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>LOGIN HERE</h3>
        <label htmlFor="firstName">Enter Password</label>
        <input
          type="text"
          name="firstName"
          onFocus={this.handleFocus}
          onChange={this.handleInputChange}
          value={this.state.password}
        />
        <button type={"submit"}>Submit</button>
        {this.context.isAuth && <h1>You are logged in</h1>}
      </form>
    );
  }
}

export default SimpleFormEvents;
