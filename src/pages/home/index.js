import Home from "./components/home"
import { Route, Routes } from "react-router";
import Cal from "./../calendar/calendar"
import { HashRouter } from "react-router-dom";
import { useState, useRef, useEffect } from "react"
import "./../../css/index.css"
import { xor4096 } from "seedrandom"
import GroupSetting from "../group/groupsetting";
import Importpage from "../import_file/import";

const Index = () => {

    /*---------------------------------*/
    let aca = {"group":[]};
    if (JSON.parse(localStorage.getItem("setting")) != null) {
        aca = JSON.parse(localStorage.getItem("setting"));
    }
    const [data, setData] = useState([]);
    const [settingprofile, setsettingprofile] = useState(aca);
    /*---------------------------------*/
    
    const rerenderStatus = useRef(false);
    const colorstatus = useRef(false);

    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<Home data={data} setData={setData} rerenderStatus={rerenderStatus} settingprofile={settingprofile}  />} />
                <Route exact path="/Calendar/" element={<Cal data={data} setData={setData} rerenderStatus={rerenderStatus} settingprofile={settingprofile} />} />
                <Route exact path="/GroupSetting/" element={<GroupSetting data={data} setData={setData} settingprofile={settingprofile} setsettingprofile={setsettingprofile} rerenderStatus={rerenderStatus} colorstatus={colorstatus} />} />
                <Route exact path="/Import/" element = {<Importpage data={data} setData={setData} settingprofile={settingprofile} setsettingprofile={setsettingprofile} rerenderStatus={rerenderStatus} colorstatus={colorstatus} />} />
                {data.map((item)=> {
                    return (
                        <Route exact path={"/"+item.id+"/"} element={<div style={{height: "10rem", backgroundColor: "red"}}></div>} />
                    )
                })}
            </Routes>
        </HashRouter>
    )
}

export default Index;