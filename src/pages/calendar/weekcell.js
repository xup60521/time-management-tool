import { xor4096 } from "seedrandom";
import Popup from "reactjs-popup";
import { useState, useEffect } from "react";

const WeekCell = ({ data, date }) => {

    let tasksinaday = Array.from(data).filter(item => item.date == date);
    const rng = new xor4096(date);
    const randomColor = Math.floor(rng()*16777215).toString(16).padStart(6, "0");
    const blackandwhite = 0.299*parseInt(randomColor.substring(0,2), 16)+0.587*parseInt(randomColor.substring(2,4), 16)+0.114*parseInt(randomColor.substring(4,6), 16)
    
    const [open, setOpen] = useState(false);  
    const closeModal = () => setOpen(false);

    const [item,setItem] = useState({})

    return (
        <div className="weekcellcontainer">
            {tasksinaday.map((d, i)=> {
                return (
                    <div className="weekcell" style={{backgroundColor: "#"+randomColor, color: (blackandwhite > 128) ? "black" : "white"}} onClick={() => {
                        setOpen(o => !o);
                        setItem(d);
                    }}>
                        <p className="weekcell">{d.title}</p>
                    </div>
                )
            })}
            <Popup open={open} closeOnDocumentClick onClose={closeModal} >
                <div className="modal" id="calendarweekclickevent" style={{border: "2px solid "+"#"+randomColor}}>
                    <p className="item title">{item.title}</p>
                    <p className="item date">{item.date}</p>
                    <p className="item note">{item.note}</p>
                </div>
            </Popup>
        </div>
    )
}

export default WeekCell;