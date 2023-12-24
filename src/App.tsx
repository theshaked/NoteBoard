import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import ModalWindow from "./components/ModalWindow";
import Button from "./components/Button";
import { useState } from "react";
import Board from "./components/Board/Board";

const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;

const App = () => {
  const [isModelOpen, setIsModelOpen] = useState<boolean>(false);
  return (
    <BrowserRouter>
      {isModelOpen && (
        <ModalWindow onClose={() => setIsModelOpen(false)}>
          <div>
            <span>TODO: add content</span>
            <Button
              children="Login"
              primaryStyle
              onClick={() => {
                console.log("Login log");
              }}
            />
          </div>
        </ModalWindow>
      )}
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="board" element={<Board />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
