import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./components/Create";
import Header from "./components/Header";
import AllUsers from "./components/AllUsers";
import Update from "./components/Update";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Create />} />
          <Route exact path="/all-users" element={<AllUsers />} />
          <Route exact path="/edit/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
