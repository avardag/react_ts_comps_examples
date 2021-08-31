import React from "react";
import Counter from "./Counter";

//TYPING FUNCTIONAL COMPONENTS

// const Title:React.FC = () => <h1>Hello guys</h1>;

// const Title: React.FC<{ title: string }> = ({ children, title }) => (
//   <h1>
//     {title}
//     {children}
//   </h1>
// );

type TitleProps = {
  title: string;
  text?: string;
};
const Title = ({ title, text = "" }: TitleProps) => <h1>{title}</h1>;

const App = () => {
  return (
    <div>
      <Title title="Hello guys" />
      <Counter title="Counter:" />
    </div>
  );
};

export default App;
