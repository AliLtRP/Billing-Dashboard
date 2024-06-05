import { Route, Routes } from "react-router-dom";
import "./App.css";
import Password from "./pages/Password";
import Invitations from "./pages/Invitations";
import Billing from "./pages/Billing";
import Apps from "./pages/Apps";
import General from "./pages/General";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/general" index element={<General />} />
        <Route path="/password" element={<Password />} />
        <Route path="/invitations" element={<Invitations />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/apps" element={<Apps />} />
      </Routes>
    </Layout>
  );
}

export default App;
