import { xor4096 } from "seedrandom";
import Popup from "reactjs-popup";
import { useState, useEffect } from "react";

const Cell = ({ data, setData, rerenderStatus, selectmonthMonth, selectmonthYear, date }) => {

    let monthdata = Array.from(data);
    const whatdateisit = (new String(selectmonthYear))+"-"+(new String(selectmonthMonth).padStart(2, "0"))+"-"+(new String(date)).padStart(2, "0");
    monthdata = monthdata.filter(d => d.date == (whatdateisit));
    const [open, setOpen] = useState(false);  
    const closeModal = () => setOpen(false);

    const rng = new xor4096(whatdateisit);
    const randomColor = Math.floor(rng()*16777215).toString(16).padStart(6, "0");
    const blackandwhite = 0.299*parseInt(randomColor.substring(0,2), 16)+0.587*parseInt(randomColor.substring(2,4), 16)+0.114*parseInt(randomColor.substring(4,6), 16)
    const [item,setItem] = useState({})

    const [mousePos, setMousePos] = useState({});

    useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
            );
        };
     }, []);

    return (
    <div className="cell">
        {monthdata.map((d)=>{
            return <div className="calendarmonthcolorbar" id={d.id} style={{backgroundColor: "#"+randomColor}} onClick={() => {
                setOpen(o => !o);
                setItem(d);
            }} >
            </div>
        })}
        <Popup open={open} closeOnDocumentClick onClose={closeModal} >
            <div className="modal" id="calendarmonthclickevent" style={{border: "2px solid "+"#"+randomColor, top: mousePos.y}}>
                <p className="item title">{item.title}</p>
                <p className="item date">{item.date}</p>
                <p className="item note">{item.note}</p>
            </div>
        </Popup>
    </div>)
}

export default Cell