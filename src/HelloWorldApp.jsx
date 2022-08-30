// const App = () => {
//   return <h1>Hello World!</h1>;
// };
// export default App;

const newMessage = {
  message: "Hello World",
  title: "Brayan",
};

const getResult = (a, b) => a + b;

export const HelloWorldApp = ({ title, subtitle }) => {
  // console.log(props);

  return (
    <>
      {/* <h1>{getResult(1, 10)}</h1> */}
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      {/* <h1>Brayan</h1> */}
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </>
  );
};
