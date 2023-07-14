import Cell from "./monthcell";

const MonthDisplay = ({ data, setData, rerenderStatus, selectmonthMonth, selectmonthYear }) => {

    const daysinamonth = new Date(selectmonthYear, selectmonthMonth, 0).getDate();
    let firstdayinamonth = new Date(selectmonthYear,selectmonthMonth-1,1);
    let lastdayinamonth = new Date(selectmonthYear,selectmonthMonth-1, daysinamonth);

    let datelist = Array.from({length: daysinamonth}, (_, i) => i + 1);
    for (let i=0;i<firstdayinamonth.getDay();i++) {
        datelist.unshift(undefined);
    }

    

    const sheet = {
        "JAN": 1,
        "FEB": 2,
        "MAR": 3,
        "APR": 4,
        "MAY": 5,
        "JUN": 6,
        "JUL": 7,
        "AUG": 8,
        "SEP": 9,
        "OCT": 10,
        "NOV": 11,
        "DEC": 12
    }

    return (
        <div className="monthdisplay">
            {datelist.map((d,i)=>{
                return (<div className="cellcontainer" id={d}>
                        <p className="celldate">{d}</p>
                        <Cell selectmonthMonth={selectmonthMonth} selectmonthYear={selectmonthYear} data={data} setData={setData} rerenderStatus={rerenderStatus} date={d}/>
                    </div>)
            })}
        </div>
    )
}

export default MonthDisplay;