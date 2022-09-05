import Details from "./pages/Details";
import Form from "./pages/Form";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Test from "./pages/Test";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/explore" element={<Test />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
