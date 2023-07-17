import Edit from "./edit"
import List from "./list"
import Menu from "../../menu"
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
            <Menu />
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