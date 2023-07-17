import Popup from "reactjs-popup"
import { HiOutlineMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <div className="menu"><Popup trigger={<button className="menu"><HiOutlineMenu/></button>} modal nested>
                {
                    close => (
                        <div className='modal' id="popupselectmenu">
                            <h3 className='content'>選擇頁面</h3>
                            <div className="navlink">
                                <NavLink to="/" style={{ textDecoration: 'none' }} ><li id="selectPage">主頁面</li></NavLink>
                                <NavLink to="/Calendar" style={{ textDecoration: 'none' }} ><li id="selectPage">日曆</li></NavLink>
                                <NavLink to="/GroupSetting/" style={{ textDecoration: 'none' }}><li id="selectPage">群組設定</li></NavLink>
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
    )
}

export default Menu;