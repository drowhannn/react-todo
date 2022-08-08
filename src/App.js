import "./App.scss";

import React from "react";

import { Header, Footer, Todos, AddTodo } from "./components";

function App() {
  return (
    <div className="app">
      <div className="app__notFooter">
        <Header />
        <AddTodo />
        <Todos />
      </div>

      <Footer />
    </div>
  );
}

export default App;
