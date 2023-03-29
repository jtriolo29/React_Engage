import { Route, Routes } from "react-router-dom";
import "./App.css";
import DvdDetail from "./DvdDetail";
import DvdList from "./DvdList";
import DvdEdit from "./DvdEdit";
import DvdCreate from "./DvdCreate";

export default function App() {
  return (
    <div className="flex justify-center my-6">
      <Routes>
        <Route path="/" element={<DvdList />} />
        <Route path="/dvd/:id" element={<DvdDetail />} />
        <Route path="/dvdEdit/:id" element={<DvdEdit />} />
        <Route path="/dvdCreate" element={<DvdCreate />} />
      </Routes>
    </div>
  );
}
