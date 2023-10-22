import logo from "./logo.svg";
import "./App.css";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className='container'>
          <div className='container'>
            <Routes>
              <Route path='/' element={<ListEmployeeComponent />} />
              <Route path='/employees' element={<ListEmployeeComponent />} />
              <Route
                path='/add-employee'
                element={<CreateEmployeeComponent />}
              />
              <Route
                path='/update-employee/:id'
                element={<UpdateEmployeeComponent />}
              />
              <Route path='/employee/:id' element={<ViewEmployeeComponent />} />
            </Routes>
          </div>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
