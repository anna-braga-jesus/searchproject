import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Search from "./components/Search";
import Historic from "./routes/Historic";

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Home />
        <Routes>
          {/* <Route path="/search" element={<Search />} /> */}
          {/* <Route path="/historic" element={<Historic />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

