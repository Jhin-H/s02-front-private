import React, {useState} from "react";
import { Link } from "react-router-dom";
import {AiOutlineBars, AiOutlineClose} from 'react-icons/ai';
import './Navbar.css';
import { SidebarData } from "./SidebarData";

const Navbar = ()=>{

    const [sidebar , setSidebar] = useState(false);
    const showSideBar = () => {
        console.log("showSideBar start sidebar ===>" + sidebar);
        setSidebar(!sidebar);
        console.log("showSideBar end sidebar ===>" + sidebar);
    }
    return(
        <>
            <div className="navbar">
                <Link to="#" onClick={showSideBar} className="menu-bars">
                    <AiOutlineBars />
                </Link>
            </div>


            <nav className={sidebar ? "nav-menu active" :"nav-menu"}>
                {console.log("===>sidebar :"+sidebar)}
                <div onClick={showSideBar} className="nav-menu-items">
                    <div className="nav-toggle">
                        <Link className="menu-close" to="#">
                            <AiOutlineClose />
                        </Link>
                    </div>

                   
                    {SidebarData.map(menu =>{
                        return (
                            <div key={menu.id} className={menu.cName}>
                                <Link to={menu.path}>
                                    {menu.icon}
                                    <span>{menu.title}</span>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </nav>
        </>
    )
}

export default Navbar ;