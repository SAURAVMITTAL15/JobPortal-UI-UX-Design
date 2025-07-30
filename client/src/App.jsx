import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Applications from "./pages/Applications.jsx";
import ApplyJobs from "./pages/ApplyJobs.jsx";
import RecruiterLogin from "./components/RecruiterLogin.jsx";
import { useContext } from "react";
import { AppContext } from "./context/AppContext.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AddJobs from "./pages/AddJobs.jsx";
import ViewApplications from "./pages/ViewApplications.jsx";
import ManageJobs from "./pages/ManageJobs.jsx";
import 'quill/dist/quill.snow.css';
function App() {

  const { value } = useContext(AppContext)
  return (
    <div>
      {value.showRecruiterLogin && <RecruiterLogin />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/apply-jobs/:id" element={<ApplyJobs />} />
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="add-jobs" element={<AddJobs />} />
          <Route path="view-applications" element={<ViewApplications />} />
          <Route path="manage-jobs" element={<ManageJobs />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;