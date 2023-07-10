import { useState } from "react"
import { v4 } from "uuid"

const Edit = ({ add, rerenderStatus, data }) => {

    const [title, setTitle] = useState("");
    function titleChange(e) {
        setTitle(e.target.value);
    }

    let currentDate = new Date();
    const [date, setDate] = useState(currentDate.getFullYear() + "-" + (new String(currentDate.getMonth()+1)).padStart(2, "0") + "-" + (new String(currentDate.getDate())).padStart(2, "0") );
    function dateChange(e) {
        setDate(e.target.value);
    }

    const [note, setNote] = useState("");
    function noteChange(e) {
        setNote(e.target.value);
    }

    

    function addItem() {
        if (title == "") {
            alert("請輸入標題")
            return 
        };

        add(function (prev) {
            return [
                {
                    id: v4(),
                    title,
                    date,
                    note,
                },
                ...prev,
            ];
        });
        setTitle("");
        setNote("");
        rerenderStatus.current = true;
        
    }

    return (
        <div className="edit">
            <p id="title" className="edit">標題</p>
            <input value={title} onChange={titleChange} type="text" id="title" className="edit" required/>
            <p id="date" className="edit">日期</p>
            <input value={date} onChange={dateChange} type="date" id="date" className="edit" required/>
            <p id="note" className="edit">內容</p>
            <input value={note} onChange={noteChange} type="text" id="note" className="edit"/>
            <button type="submit" className="add" onClick={addItem}>新增</button>
        </div>
    )
}

export default Edit;