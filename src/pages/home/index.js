import Edit from "./components/edit"
import List from "./components/list"
import Cal from "./components/calendar"
import "./index.css"
import { useState, useEffect, useRef } from "react"
import {HiOutlineMenu} from "react-icons/hi"
import {Popup} from "reactjs-popup"
import { NavLink } from "react-router-dom"

const Home = () => {

    const [data, setData] = useState([]);
    const rerenderStatus = useRef(false);

    useEffect(()=> {
        if (localStorage.getItem("user") != null) {
            setData(JSON.parse(localStorage.getItem("user")))
        }
    }, ["a"])

    useEffect(()=> {
        if (rerenderStatus.current == false) {
            return;
        } else {
            localStorage.setItem('user', JSON.stringify(data));
            rerenderStatus.current = false; 
        }
    }, [data]);

    return (
    <div>
        <div className="app">
            <div className="menu"><Popup trigger={<button className="menu"><HiOutlineMenu/></button>} modal nested>
                {
                    close => (
                        <div className='modal'>
                            <h3 className='content'>選擇頁面</h3>
                            <div class="navlink">
                                <NavLink to="/" style={{ textDecoration: 'none' }}>主頁面</NavLink>
                                <NavLink to="/Calendar" style={{ textDecoration: 'none' }}>日曆</NavLink>
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                        Close
                                </button>
                            </div>
                        </div>
                    )
                }
                </Popup></div>
            <div className="main">
            <h1>FILL</h1>
            <Edit data={data} add={setData} rerenderStatus={rerenderStatus}/>
            <List data={data} setData={setData} rerenderStatus={rerenderStatus}/>
            </div>
        </div>
    </div>
    )
}

export default Home