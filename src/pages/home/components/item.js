import { NavLink } from "react-router-dom";
import seedrandom, { alea, xor128, xor4096 } from "seedrandom";

const Item = ({id, note, date, title, setData, rerenderStatus, group, settingprofile}) => {

    function deleteItem() {
        setData(function(prev) {
            return prev.filter(item=> item.id !== id)
        })
        rerenderStatus.current = true;
    }

    let groupsinsetting = (new Object(settingprofile)).group.map(i=>i.name);
    let color = "";
    if (groupsinsetting.indexOf(group) != -1) {
        color = settingprofile.group[groupsinsetting.indexOf(group)].color;
    } else {
        color = "#2D4356";
    }

    const rng = new xor4096(date);
    const randomColor = Math.floor(rng()*16777215).toString(16).padStart(6, "0");
    const blackandwhite = 0.299*parseInt(color.substring(1,3), 16)+0.587*parseInt(color.substring(3,5), 16)+0.114*parseInt(color.substring(5,7), 16)
    
    
  
    return (
    
        <div className="item" style={{backgroundColor: color }}>
            <NavLink to={"/"+id} style={{ textDecoration: 'none' }} >
            <div className="content" style={{color: (blackandwhite > 180 ? "black" : "white")}}>
                <p className="item title">{title}</p>
                <div>
                    <p className="item date">{date+" "+group}</p>
                </div>
                <p className="item note">{note}</p>
            </div>
            </NavLink>
            <button onClick={deleteItem} className="delete">刪除</button>
        </div>
    
        
    )
}

export default Item;