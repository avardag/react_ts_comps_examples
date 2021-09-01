import React, { Component } from "react";

class SimpleFormEvents extends Component {
  ///////////////////////////////////////////////////////////////////////////////
  //handleFocus = (e: React.SyntheticEvent) => {
  // handleFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
  handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(e.currentTarget);
  };
  /////////////////////////////////////////////////////////////////////////////
  // handleSubmit = (e: React.SyntheticEvent) => {
  // handleSubmit:React.FormEventHandler<HTMLFormElement> = (e) => {
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted");
  };
  //Render
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="firstName">Simpel Text:</label>
        <input type="text" name="firstName" onFocus={this.handleFocus} />
        <button type={"submit"}>Submit</button>
      </form>
    );
  }
}

export default SimpleFormEvents;
