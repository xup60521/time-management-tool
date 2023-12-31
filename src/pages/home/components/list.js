import Item from "./item"

const List = ({ data, setData, rerenderStatus, settingprofile }) => {
    let list = Array.from(data);

    list.sort((a,b)=> {
        let [ay,am,aday] = a.date.split("-");
        let [by,bm,bday] = b.date.split("-");
        return  new Date(ay,am,aday) - new Date(by,bm,bday);
    });
    
    return (
        <div className="list">
            {list.map((item) => {
                const { title, date, note, id, group} = item;
                return (
                    <Item 
                    key={id}
                    id={id}
                    title={title}
                    date={date}
                    note={note}
                    setData={setData}
                    rerenderStatus={rerenderStatus}
                    group={group}
                    settingprofile={settingprofile}
                    />
                )
            })}
        </div>

    )
}

export default List;