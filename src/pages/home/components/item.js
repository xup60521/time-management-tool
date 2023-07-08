const Item = ({id, note, date, title, setData, rerenderStatus}) => {

    function deleteItem() {
        setData(function(prev) {
            return prev.filter(item=> item.id !== id)
        })
        rerenderStatus.current = true;
    }
    
    return (
        <div className="item">
            <div className="content">
                <p className="item title">{title}</p>
                <p className="item date">{date}</p>
                <p className="item note">{note}</p>
            </div>
            
            <button onClick={deleteItem} className="delete">刪除</button>
            
            
        </div>
    )
}

export default Item;