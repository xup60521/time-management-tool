import Popup from "reactjs-popup";
import { HiOutlineMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import ByDate from "./bydate";
import ByWeek from "./byweek";
import ByMonth from "./bymonth";
import Menu from "../menu";

const Cal = ({ data, setData, rerenderStatus }) => {

    useEffect(()=> {
        if (localStorage.getItem("user") != null) {
            setData(JSON.parse(localStorage.getItem("user")))
        }
    }, ["a"]);

    useEffect(()=> {
        if (rerenderStatus.current == false) {
            return;
        } else {
            localStorage.setItem('user', JSON.stringify(data));
            rerenderStatus.current = false; 
        }
    }, [data]);

    const [viewType, setviewType] = useState("Day");
    const changeview = (e) => {
        setviewType(e.target.value)
    }

    return (
    <div>
        <div className="app">
            <Menu />
            <div className="cal">
                <h1>CALENDAR</h1>            
                <select defaultValue="Day" id="changecalendarviewtype"  onChange={changeview}>
                    <option value="Day">Day</option>
                    <option value="Week">Week</option>
                    <option value="Month">Month</option>
                </select>
                <div className="calview">
                    {(()=>{switch(viewType) {
                        case "Day": return (<ByDate data={data} setData={setData} rerenderStatus={rerenderStatus} />);
                        case "Week": return (<ByWeek data={data} setData={setData} rerenderStatus={rerenderStatus} />);
                        case "Month": return (<ByMonth data={data} setData={setData} rerenderStatus={rerenderStatus} />);
                    }})()}
                </div>
            </div>
        </div>
    </div>
    )
}

export default Cal;