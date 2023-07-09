import seedrandom, { alea, xor128, xor4096 } from "seedrandom";

const Item = ({id, note, date, title, setData, rerenderStatus}) => {

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
        <div className="item" style={{backgroundColor: "#"+randomColor }}>
            <div className="content" style={{color: (blackandwhite > 128) ? "black" : "white"}}>
                <p className="item title">{title}</p>
                <p className="item date">{date}</p>
                <p className="item note">{note}</p>
            </div>
            <button onClick={deleteItem} className="delete">刪除</button>
            
            
        </div>
    )
}

export default Item;