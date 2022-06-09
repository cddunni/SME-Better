import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { routes } from "./router/routes";

export default function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route,i) => {
          return <Route exact={route.exact} key={i} path={route.link} element={<route.component/>} />
        })}
      </Routes>
    </Router>
  )
}
