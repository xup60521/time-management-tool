import Popup from "reactjs-popup";
import { HiOutlineMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import ByDate from "./bydate";
import ByWeek from "./byweek";
import ByMonth from "./bymonth";

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
            <div className="menu"><Popup trigger={<button className="menu"><HiOutlineMenu/></button>} modal nested>
                {
                    close => (
                        <div className='modal'>
                            <h3 className='content'>選擇頁面</h3>
                            <div className="navlink">
                                <NavLink to="/" style={{ textDecoration: 'none' }} ><li id="selectPage">主頁面</li></NavLink>
                                <NavLink to="/Calendar" style={{ textDecoration: 'none' }} ><li id="selectPage">日曆</li></NavLink>
                            </div>
                            <div>
                                <button id="closePopup" onClick=
                                    {() => close()}>
                                        Close
                                </button>
                            </div>
                        </div>
                    )
                }
                </Popup>
            </div>
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
                        case "Week": return (<ByWeek/>);
                        case "Month": return (<ByMonth/>);
                    }})()}
                </div>
            </div>
        </div>
    </div>
    )
}

export default Cal;