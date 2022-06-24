import React from "react";
import "../common/css/page.css";
import Header from "../common/Header";
import MemberContainer from "../S021100030/container/MemberContainer";
import Pagination from"../common/elements/Pagination";
import Title from "../common/elements/Title";



const Member = () =>{
    return (


            
            <div className="Wrap">
                <div className="inner">

                    <Header></Header>
                    <Title/>

                    <MemberContainer/>
                    
                    <div className="pagination">
                        <Pagination/>
                    </div>

                </div>

            </div>
           
    )
}

export default Member ;