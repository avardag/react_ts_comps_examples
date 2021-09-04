import React, { useState, ReactNode } from "react";
import Index from "./moreHooks";

//conventional props
function Heading2({ title }: { title: string }) {
  return <h1>{title}</h1>;
}

// function HeadingWithContent({ children }: { children: React.ReactNode }):React.ReactElement | null {
function HeadingWithContent({ children }: { children: ReactNode }) {
  return <h1>{children}</h1>;
}
//defaultProps
const defaultContProps = {
  heading: <strong>My Default Heading</strong>,
};
type ContainerProps = { children: ReactNode } & typeof defaultContProps;

function Container({ heading, children }: ContainerProps): React.ReactElement {
  return (
    <div>
      <h1>{heading}</h1>
      {children}
    </div>
  );
}
Container.defaultProps = defaultContProps;

//Functional props
function TextWithNumber({
  children,
  header,
}: {
  children: (num: number) => ReactNode;
  header?: (num: number) => ReactNode;
}) {
  const [numState, setNumState] = useState(1);
  return (
    <div>
      {header && <h2>{header?.(numState)}</h2>}
      <div>{children(numState)}</div>
      <div>
        <button onClick={() => setNumState(numState + 1)}>Add</button>
      </div>
    </div>
  );
}
//List
function List<ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
}

//Main App
function App2() {
  return (
    <div>
      <Heading2 title="hello" />
      <HeadingWithContent>
        <strong>Hello Again</strong>
      </HeadingWithContent>
      <Container>Booo</Container>
      <TextWithNumber header={(num) => <span>Header {num}</span>}>
        {(num) => <div>Today's number is {num}</div>}
      </TextWithNumber>
      <List
        items={["ida", "kosa", "sjela"]}
        render={(item) => item.toLowerCase()}
      ></List>
      <Index />
    </div>
  );
}

export default App2;
