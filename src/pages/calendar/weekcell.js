import { xor4096 } from "seedrandom";
import Popup from "reactjs-popup";
import { useState, useEffect } from "react";

const WeekCell = ({ data, date, settingprofile }) => {

    let tasksinaday = Array.from(data).filter(item => item.date == date);
    const rng = new xor4096(date);
    const randomColor = Math.floor(rng()*16777215).toString(16).padStart(6, "0");
    
    const [open, setOpen] = useState(false);  
    const closeModal = () => setOpen(false);

    const [item,setItem] = useState({})
    let groupsinsetting = (new Object(settingprofile)).group.map(i=>i.name);

    return (
        <div className="weekcellcontainer">
            {tasksinaday.map((d, i)=> {
                let group = d.group;
                let color = "";
                if (groupsinsetting.indexOf(group) != -1) {
                    color = settingprofile.group[groupsinsetting.indexOf(group)].color;
                } else {
                    color = "#2D4356";
                }
                const blackandwhite = 0.299*parseInt(color.substring(1,3), 16)+0.587*parseInt(color.substring(3,5), 16)+0.114*parseInt(color.substring(5,7), 16);
                
                return (
                    <div className="weekcell" style={{backgroundColor: color, color: (blackandwhite > 180 ? "black" : "white")}} onClick={() => {
                        setOpen(o => !o);
                        setItem(d);
                    }}>
                        <p className="weekcell">{d.title}</p>
                    </div>
                )
            })}
            {(()=>{
                let color = "";
                let group = item.group;
                if (groupsinsetting.indexOf(group) != -1) {
                    color = settingprofile.group[groupsinsetting.indexOf(group)].color;
                } else {
                    color = "#2D4356";
                };
                return (
                    <Popup open={open} closeOnDocumentClick onClose={closeModal} >
                        <div className="modal" id="calendarweekclickevent" style={{border: `2px solid ${color}`}}>
                            <p className="item title">{item.title}</p>
                            <p className="item date">{item.date+" "+item.group}</p>
                            <p className="item note">{item.note}</p>
                        </div>
                    </Popup>
                )
            })()}
            
        </div>
    )
}

export default WeekCell;