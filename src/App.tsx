import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";

function App() {
  return (
      <Router>
        <div className="flex gap-5 w-full">
          <Nav />
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
