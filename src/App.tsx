import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Suspense, lazy} from "react"
import Loader from "./components/Loader";
import "./styles/app.scss"


const Dashboard = lazy(() => import("./pages/Dashboard"));
const Inspection= lazy(()=> import("./pages/Inspection"));
const IssueTracker= lazy(()=> import("./pages/IssueTracker"));
const Review=lazy(()=>import("./pages/Review"));
const App = () => {
  return (
    <Suspense fallback={<Loader/>}>
       <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
        </Routes>
        <Routes>
          <Route path="/admin/inspection" element={<Inspection/>} />
        </Routes>
        <Routes>
          <Route path="/admin/issueTracker" element={<IssueTracker/>} />
        </Routes>
        <Routes>
          <Route path="/admin/review" element={<Review/>} />
        </Routes>
       </Router>
    </Suspense>  
  )
}
export default App;