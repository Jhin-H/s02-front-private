import React from "react";
import "../common/css/page.css";
import Header from "../common/Header";
import EventContainer from "../S022300040/container/EventContainer"
import Pagination from"../common/elements/Pagination";


const Event = () =>{
    return (

            
            <div className="Wrap">
                <div className="inner">

                    <Header></Header>

                    <EventContainer/>
                    
                    <div className="pagination">
                        <Pagination/>
                    </div>

                </div>

            </div>
           
    )
}

export default Event ;