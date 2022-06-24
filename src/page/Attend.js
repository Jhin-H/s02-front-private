import React from "react";
import "../common/css/page.css";
import Header from "../common/Header";
import AttendContainer from "../S022200030/container/AttContainer";
import Pagination from"../common/elements/Pagination";
import Title from "../common/elements/Title";





const Attend = () =>{
    return (

            
            <div className="Wrap">
                <div className="inner">

                    <Header></Header>
                    <Title/>

                    <AttendContainer/>
                    
                    <div className="pagination">
                        <Pagination/>
                    </div>

                </div>

            </div>
           
    
      
    
    )
}

export default Attend ;
