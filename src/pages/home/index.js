import Edit from "./components/edit"
import List from "./components/list"
import Calendar from "./components/calendar"
import "./index.css"
import { useState, useEffect, useRef } from "react"



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
    

    return (<div className="app">
        <h1>FILL</h1>
        <Edit add={setData} rerenderStatus={rerenderStatus}/>
        <List data={data} setData={setData} rerenderStatus={rerenderStatus}/>
    </div>)
}

export default Home