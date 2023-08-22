const Greeting = ({ name }) => {
  return <div>Hello {name}</div>;
};

const App = () => {
  return <Greeting name="John" />;
};