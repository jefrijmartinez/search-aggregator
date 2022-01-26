import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Layout>
      <div>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
