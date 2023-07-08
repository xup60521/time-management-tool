import Item from "./item"

const List = ({ data, setData, rerenderStatus }) => {
    return (
        <div className="list">
            {data.map((item) => {
                const { title, date, note, id} = item;
                return (
                    <Item 
                    key={id}
                    id={id}
                    title={title}
                    date={date}
                    note={note}
                    setData={setData}
                    rerenderStatus={rerenderStatus}
                    />
                )
            })}
        </div>

    )
}

export default List;