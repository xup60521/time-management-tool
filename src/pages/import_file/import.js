import { json } from "react-router";
import Menu from "../menu";
import { useEffect, useRef, useState } from "react";

const Importpage = ({ data, setData, settingprofile, setsettingprofile, rerenderStatus, colorstatus }) => {

    /*---------------------------------*/

    useEffect(()=> {
        if (localStorage.getItem("user") != null) {
            setData(JSON.parse(localStorage.getItem("user")).posts)
        }
    }, ["a"])

    useEffect(()=> {
        if (rerenderStatus.current == false) {
            return;
        } else {
            localStorage.setItem('user', JSON.stringify({
                "posts": data
            }));
            rerenderStatus.current = false; 
        }
    }, [data]);

    /*---------------------------------*/



    const [InputData, setInputData] = useState("");
    const DataInput = (e) => {
        let reader = new FileReader();
        reader.readAsText(e.target.files[0])
        reader.onload = (i) => {
            setInputData(JSON.parse(i.target.result));    
        }
    }

    const [InputProfile, setInputProfile] = useState("");
    const ProfileInput = (e) => {
        let reader = new FileReader();
        reader.readAsText(e.target.files[0])
        reader.onload = (i) => {
            setInputProfile(JSON.parse(i.target.result));    
        }
    }

    const replacedata = () => {
        rerenderStatus.current = true;
        setData(InputData.posts);
    }

    const replaceprofile = () => {
        colorstatus.current = true;
        setsettingprofile(InputProfile)
    }

    return (
        <div className="app">
            <div className="importpage">
                <h1>資料管理</h1>
                <div className="importcontainer">
                    <div>
                        <h3>匯入資料</h3>
                        <input type="file" accept=".json, .csv" onChange={DataInput} />
                        {(()=>{
                            if (Array.isArray(InputData["posts"])) {
                                return (
                                    <div className="inputbuttoncontainer">
                                        <button className="datainputbutton" onClick={replacedata}>取代</button>
                                        <button className="datainputbutton">合併</button>
                                    </div>
                                )
                            }
                        })()}
                    </div>
                    <div>
                        <h3>匯入設定檔</h3>
                        <input type="file" accept=".json, .csv" onChange={ProfileInput} />
                        {(()=>{
                            if (InputProfile != "") {
                                return (
                                    <div className="inputbuttoncontainer">
                                        <button className="profileinputbutton" onClick={replaceprofile}>取代</button>
                                        <button className="profileinputbutton">合併</button>
                                    </div>
                                )
                            }
                        })()}
                    </div>
                    <div>
                        <h3>匯出資料</h3>
                        <a
                            href={`data:text/json;charset=utf-8,${encodeURIComponent(
                            JSON.stringify(data)
                            )}`}
                            download="data.json"
                        >
                            {`Download Json`}
                        </a>
                    </div>
                    <div>
                        <h3>匯出設定檔</h3>
                        <a
                            href={`data:text/json;charset=utf-8,${encodeURIComponent(
                            JSON.stringify(settingprofile)
                            )}`}
                            download="profile.json"
                        >
                            {`Download Json`}
                        </a>
                    </div>
                </div>
            </div>
            <Menu />
        </div>
    )
}

export default Importpage;