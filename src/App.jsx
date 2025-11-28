import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hello from "./Hello.jsx";
import MessageBox from "./messages/MessageBox.jsx";
import Address from "./address/Address.jsx";
import TodoApp from "./tasks/TodoApp.jsx";

function App() {
  const _messages = [
    { id: 1, author: "Sébastien", text: "Hello World" },
    { id: 2, author: "Mathieu", text: "I Love React" },
    { id: 3, author: "Guillaume", text: "Javascript Forever" },
  ];

  return (
    <>
      <Address />
    </>
  );
}

export default App;
