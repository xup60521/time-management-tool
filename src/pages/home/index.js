import Home from "./components/home"
import { Route, Routes } from "react-router";
import Cal from "./../calendar/calendar"
import { HashRouter } from "react-router-dom";
import { useState, useRef } from "react"


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