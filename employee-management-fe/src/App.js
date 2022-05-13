import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Employees from "./components/employees/Employees";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import AddEmployeeComponent from "./components/employees/AddEmployeeComponent";

function App() {
  return (
    <div className="App">
        <Router>
            <HeaderComponent/>
            <br/>
                <div className={"container"}>
                    <Routes>
                        <Route path={"/"} element={<Employees/>}/>
                        <Route path={"/employees"} element={<Employees/>}/>
                        <Route path={"/add-employee"} element={<AddEmployeeComponent/>}/>
                    </Routes>
                </div>
            <br/>
            <FooterComponent/>
        </Router>
    </div>
  );
}

export default App;
