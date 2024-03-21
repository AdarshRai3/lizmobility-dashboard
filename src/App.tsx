import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Suspense, lazy} from "react"
import Loader from "./components/Loader";
import "./styles/app.scss"


const Dashboard = lazy(() => import("./pages/Dashboard"));
const Inspection= lazy(()=> import("./pages/Inspection"));
const IssueTracker= lazy(()=> import("./pages/IssueTracker"));
const App = () => {
  return (
    <Suspense fallback={<Loader/>}>
       <Router>
        <Routes>
          <Route path="/admin/Dashboard" element={<Dashboard/>} />
        </Routes>
        <Routes>
          <Route path="/admin/Inspection" element={<Inspection/>} />
        </Routes>
        <Routes>
          <Route path="/admin/IssueTracker" element={<IssueTracker/>} />
        </Routes>
       </Router>
    </Suspense>  
  )
}
export default App;