import Popup from "reactjs-popup";
import { HiOutlineMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Cal = () => {
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
                </Popup>
            </div>
            <div className="main">
                <h1>Calendar</h1>
            </div>
        
            
        </div>
    </div>
    )
}

export default Cal;