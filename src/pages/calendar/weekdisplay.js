import WeekCell from "./weekcell";

const WeekDisplay = ({ data, setData, rerenderStatus, selectdateofaweek }) => {
    
    const firstdayofaweek = new Date(selectdateofaweek);
    firstdayofaweek.setDate(firstdayofaweek.getDate()-firstdayofaweek.getDay());
    let bufday = new Date(firstdayofaweek);
    let weeklist = [];

    for (let i=0;i<7;i++) {
        weeklist.push(bufday.getFullYear() + "-" + (new String(bufday.getMonth()+1)).padStart(2, "0") + "-" + (new String(bufday.getDate())).padStart(2, "0"));
        bufday.setDate(bufday.getDate()+1);
    }

    return (
        <div className="weekdisplay">
            {weeklist.map((d, i)=> {
                return (
                    <div className="calweekcontainer">
                        <p className="calweekdate">{(()=>{ 
                            return ((new String(new Number(d.split("-")[1])))+"/"+(new String(new Number(d.split("-")[2]))))
                        })()}</p>
                        <WeekCell data={data} date={d} />
                    </div>
                )
            })}
        </div>
    )
}

export default WeekDisplay;