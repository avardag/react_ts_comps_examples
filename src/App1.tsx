import React, { useState } from "react";
import Counter from "./Counter";
import Counter2 from "./CounterWithEvents";
import SimpleFormEvents from "./SimpleFormEvents";
import Form from "./Form";
import Profile from "./Profile";
import { AuthContext } from "./AuthContext";

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
  const [isAuth, setIsAuth] = useState(false);
  const login = () => {
    setIsAuth(true);
  };
  return (
    <AuthContext.Provider value={{ isAuth, login }}>
      <Profile />
      <Title title="Hello guys" />
      <Counter title="Counter:" />
      <Counter2 title="Counter 2:" />
      <SimpleFormEvents />
      <Form />
    </AuthContext.Provider>
  );
};

export default App;
