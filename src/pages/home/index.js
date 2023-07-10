import Home from "./components/home"
import { Route, Routes } from "react-router";
import Cal from "./components/calendar";
import { HashRouter } from "react-router-dom";
import {HiOutlineMenu} from "react-icons/hi"
import {Popup} from "reactjs-popup"
import { NavLink } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import Edit from "./components/edit";
import List from "./components/list";


const Index = () => {

    const [data, setData] = useState([]);
    const rerenderStatus = useRef(false);

    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<Home data={data} setData={setData} rerenderStatus={rerenderStatus}/>} />
                <Route exact path="/Calendar/" element={<Cal data={data} setData={setData} rerenderStatus={rerenderStatus} />} />
            </Routes>
        </HashRouter>
    )
}

export default Index;