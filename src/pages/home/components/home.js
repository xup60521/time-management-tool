import Edit from "./edit"
import List from "./list"
import "./../index.css"
import { useState, useEffect, useRef } from "react"
import {HiOutlineMenu} from "react-icons/hi"
import {Popup} from "reactjs-popup"
import { NavLink } from "react-router-dom"


const Home = ({data, setData, rerenderStatus}) => {

    

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
                                <NavLink to="/" style={{ textDecoration: 'none' }} ><li id="selectPage">主頁面</li></NavLink>
                                <NavLink to="/Calendar" style={{ textDecoration: 'none' }} ><li id="selectPage">日曆</li></NavLink>
                            </div>
                            <div>
                                <button id="closePopup" onClick=
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