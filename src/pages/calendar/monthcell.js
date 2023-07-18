import { xor4096 } from "seedrandom";
import Popup from "reactjs-popup";
import { useState, useEffect } from "react";

const Cell = ({ data, setData, rerenderStatus, selectmonthMonth, selectmonthYear, date, settingprofile }) => {

    let monthdata = Array.from(data);
    const whatdateisit = (new String(selectmonthYear))+"-"+(new String(selectmonthMonth).padStart(2, "0"))+"-"+(new String(date)).padStart(2, "0");
    monthdata = monthdata.filter(d => d.date == (whatdateisit));
    const [open, setOpen] = useState(false);  
    const closeModal = () => setOpen(false);

    let groupsinsetting = (new Object(settingprofile)).group.map(i=>i.name);

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
            let group = d.group;
            let color = "";
            if (groupsinsetting.indexOf(group) != -1) {
                color = settingprofile.group[groupsinsetting.indexOf(group)].color;
            } else {
                color = "#2D4356";
            }
            return <div className="calendarmonthcolorbar" id={d.id} style={{backgroundColor: color}} onClick={() => {
                setOpen(o => !o);
                setItem(d);
            }} >
            </div>
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
    </div>)
}

export default Cell