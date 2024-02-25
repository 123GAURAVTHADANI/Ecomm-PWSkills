import logo from "./logo.svg";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { createContext, useState } from "react";
import MainComponent from "./Components/MainComponent.js/MainComponent";
import SidebarComponent from "./Components/SidebarComponent/SidebarComponent";
import HOC from "./HOC/HOC";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailComponent from "./Components/DetailComponent.js/DetailComponent";
export const Chroma = createContext(null);
function App() {
  const [themeProvider, setThemeProvider] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
      <Chroma.Provider value={{ themeProvider, setThemeProvider }}>
        <Routes>
          <Route path='/' element={<MainComponent/>}/>
          <Route path='/product/:id' element={<DetailComponent/>}/>
        </Routes>
      </Chroma.Provider>
      </BrowserRouter>
    </div>
  );
}
export default HOC(App);
