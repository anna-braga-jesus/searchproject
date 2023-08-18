import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Historic from "./routes/Historic";
import { createContext, useState } from "react";
import { UserType } from "./types/user";
import Repos from "./routes/Repos";


interface GlobalContextType {
  global: any;
  setGlobal: React.Dispatch<React.SetStateAction<any>>;
}

export const GlobalContext = createContext<GlobalContextType>({ global: null, setGlobal: () => {} });

export default function App() {
  const [global, setGlobal] = useState()

  return (
    <GlobalContext.Provider value={{global, setGlobal}}>
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/historic" element={<Historic />} /> 
           <Route path="/repos/:userName" element={<Repos />} /> 
        </Routes>
      </BrowserRouter>
    </div>
    </GlobalContext.Provider>
  );
}