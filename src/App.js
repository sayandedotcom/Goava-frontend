import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import Home from "./routes/home/home";
import Course from "./routes/course/course";
import About from "./routes/about/about";
import Error from "./routes/error/error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="Courses" element={<Course />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
