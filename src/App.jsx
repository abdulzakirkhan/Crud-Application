import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./components/Create";
import Header from "./components/Header";
import AllUsers from "./components/AllUsers";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/all-users" element={<AllUsers />} />
          {/* <Route path="/all-users" element={<AllUsers />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
