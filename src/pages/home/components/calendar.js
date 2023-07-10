import Popup from "reactjs-popup";
import { HiOutlineMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { useState } from "react";
import Item from "./item";

const Cal = ({ data, setData, rerenderStatus }) => {

    let currentDate = new Date();
    const [selectdate, setselectdate] = useState(currentDate.getFullYear() + "-" + (new String(currentDate.getMonth()+1)).padStart(2, "0") + "-" + (new String(currentDate.getDate())).padStart(2, "0") );
    const changedate = (e) => {
        setselectdate(e.target.value);
    }

    const nextdate = () => {
        if (selectdate != "") {
            let dateobj = new Date(selectdate);
            dateobj.setDate(dateobj.getDate()+1);
            setselectdate(dateobj.getFullYear() + "-" + (new String(dateobj.getMonth()+1)).padStart(2, "0") + "-" + (new String(dateobj.getDate())).padStart(2, "0") );
        } else {
            return;
        }
    }

    const prevdate = () => {
        if (selectdate != "") {
            let dateobj = new Date(selectdate);
            dateobj.setDate(dateobj.getDate()-1);
            setselectdate(dateobj.getFullYear() + "-" + (new String(dateobj.getMonth()+1)).padStart(2, "0") + "-" + (new String(dateobj.getDate())).padStart(2, "0") );
        } else {
            return;
        }
    }

    return (
    <div>
        <div className="app">
            <div className="menu"><Popup trigger={<button className="menu"><HiOutlineMenu/></button>} modal nested>
                {
                    close => (
                        <div className='modal'>
                            <h3 className='content'>選擇頁面</h3>
                            <div class="navlink">
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
                <div className="selectDate">
                    <button className="changedate" id="lastdate" onClick={prevdate} ><AiOutlineDoubleLeft/></button>
                    <input className="changedate" type="date" value={selectdate} onChange={changedate} />
                    <button className="changedate" id="nextdate" onClick={nextdate} ><AiOutlineDoubleRight/></button>
                </div>
                <div className="list">
                    {data.filter(d => d.date == selectdate).map(
                        (item) => {
                            const { title, date, note, id} = item;
                            return (
                                <Item 
                                key={id}
                                id={id}
                                title={title}
                                date={date}
                                note={note}
                                setData={setData}
                                rerenderStatus={rerenderStatus}
                                />
                            )
                        }
                    )}
                </div>
            </div>
        
            
        </div>
    </div>
    )
}

export default Cal;