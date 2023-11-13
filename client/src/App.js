// import those pages in App.js
// then based on the path show each components using react-router components
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./booking/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";

function App() {
  return (
    <div>
      <Home />
      <Login />
      <Register />

    </div>
  );
}

export default App;
