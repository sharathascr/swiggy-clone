import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";
import AppContextWrapper from "./contexts/AppContextWrapper";

function App() {
  return (
    <AppContextWrapper>
      <BrowserRouter>
        <div>
          <header>
            <Navbar />
            <AppRouter />
          </header>
        </div>
      </BrowserRouter>
    </AppContextWrapper>
  );
}

export default App;
