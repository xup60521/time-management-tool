import { useState } from "react";
import Menu from "../menu";

const GroupSetting = ({ data, setData, settingprofile, setsettingprofile }) => {

    let grouplist = data.map((item)=>   item.group    );
    const [selectedgroup, setselectedgroup] = useState("");
    const ChangeGroup = (e) => {
        setselectedgroup(e.target.value);
    }

    

    return (
        <div className="app">
            <Menu/>
            <div className="groupsetting">
                <h1>Group Setting</h1>
                <h3 id="groupsetting">Color</h3>
                <div className="changecolor">
                    <input list="grouplist" id="changegroup" value={selectedgroup} onChange={ChangeGroup} />
                    <datalist id="grouplist">
                    {grouplist.map((d)=> {
                        return (
                            <option value={d} />
                        )
                    })}
                    </datalist>
                    <input type="color" id="inputcolor" />
                </div>
            </div>
        </div>
    )
};

export default GroupSetting;