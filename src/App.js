import Header from "./Components/Header";

import WatchList from "./Components/WatchList";
import Watched from "./Components/Watched";
import Add from "./Components/Add";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContextProvider from "./Context/GlobalContext";

import "./index.css";
function App() {
  return (
    <div>
      <Router>
        <ContextProvider>
          <Header />
          <Routes>
            <Route path="/" Component={WatchList} />
            <Route path="/watched" Component={Watched} />
            <Route path="/add" Component={Add} />
          </Routes>
        </ContextProvider>
      </Router>
    </div>
  );
}

export default App;
