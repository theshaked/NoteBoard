// NavBar.js or NavBar.tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NotFound />}>
          <Route index element={<NotFound />} />
          <Route path="home" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
