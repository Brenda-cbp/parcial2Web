import { Route, Routes } from "react-router-dom";
import Books from "../components/books";
import Login from "../components/login";

const CreateRoutes = () => (
    <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/books" element={<Books />} />
    </Routes>
);

export default CreateRoutes;