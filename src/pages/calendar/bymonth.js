import { useState } from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import MonthDisplay from "./monthdisplay";

const ByMonth = ({ data, setData, rerenderStatus }) => {

    let currentDate = new Date();

    const [selectmonthMonth, setselectmonthMonth] = useState(new Number(currentDate.getMonth()+1));
    const changemonth_month = (e) => {
        setselectmonthMonth(e.target.value);
    };

    const [selectmonthYear, setselectmonthYear] = useState(new Number(currentDate.getFullYear()));
    const changemonth_year = (e) => {
        setselectmonthYear(e.target.value);
    }

    const nextMonth = () => {
        if (selectmonthMonth <= 11 & selectmonthMonth >= 1) {
            setselectmonthMonth(selectmonthMonth+1);
        } else if (selectmonthMonth == 12) {
            setselectmonthYear(selectmonthYear+1);
            setselectmonthMonth(1);
        } else {
            setselectmonthMonth(12);
        };
    }

    const prevMonth = () => {
        if (selectmonthMonth <= 12 & selectmonthMonth >= 2) {
            setselectmonthMonth(selectmonthMonth-1);
        } else if (selectmonthMonth == 1) {
            setselectmonthYear(selectmonthYear-1);
            setselectmonthMonth(12);
        } else {
            setselectmonthMonth(1);
        };
    }

    return (
        <div className="monthcontainer">
            <div className="caltop">
                <button onClick={prevMonth} className="changemonth"><AiOutlineDoubleLeft/></button>
                <div className="changemonthcontainer">
                    <input className="changemonth_year" type="number" value={selectmonthYear} onChange={changemonth_year} />
                    <input className="changemonth_month" type="text" value={selectmonthMonth} onChange={changemonth_month} />
                </div>
                <button onClick={nextMonth} className="changemonth"><AiOutlineDoubleRight/></button>
            </div>
            <div className="calshowweek">
                <p id="week">星期天</p>
                <p id="week">星期一</p>
                <p id="week">星期二</p>
                <p id="week">星期三</p>
                <p id="week">星期四</p>
                <p id="week">星期五</p>
                <p id="week">星期六</p>
            </div>
            <MonthDisplay data={data} setData={setData} rerenderStatus={rerenderStatus} selectmonthMonth={selectmonthMonth} selectmonthYear={selectmonthYear} />
        </div>
    )
};

export default ByMonth;
