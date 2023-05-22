import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";

function App() {
  return (
      <Router>
        <div className="flex gap-10 w-full">
          <Nav />
          <div className="ml-24">
          <Routes>
            <Route path="/Dashboard" element={<Homepage />} />
          </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
