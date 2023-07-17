import { NavLink } from "react-router-dom";
import seedrandom, { alea, xor128, xor4096 } from "seedrandom";

const Item = ({id, note, date, title, setData, rerenderStatus, group}) => {

    function deleteItem() {
        setData(function(prev) {
            return prev.filter(item=> item.id !== id)
        })
        rerenderStatus.current = true;
    }
    
    const rng = new xor4096(date);
    const randomColor = Math.floor(rng()*16777215).toString(16).padStart(6, "0");
    const blackandwhite = 0.299*parseInt(randomColor.substring(0,2), 16)+0.587*parseInt(randomColor.substring(2,4), 16)+0.114*parseInt(randomColor.substring(4,6), 16)
    
  
    return (
    
        <div className="item" style={{backgroundColor: "#2D4356" }}>
            <NavLink to={"/"+id} style={{ textDecoration: 'none' }} >
            <div className="content" style={{color: "white"}}>
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