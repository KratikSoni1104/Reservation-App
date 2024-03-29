import {
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Hotel from './pages/Hotel/Hotel';
import List from "./pages/List/List";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />}/>
          <Route path="/hotels/:id" element={<Hotel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
