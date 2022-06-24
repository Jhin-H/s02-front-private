import React from "react";
import "../common/css/page.css";
import Header from "../common/Header";
import GroupContainer from "../S021100010/container/GroupContainer";
import Pagination from"../common/elements/Pagination";
import Title from "../common/elements/Title";


const Group = () =>{
    return (

            
            <div className="Wrap">
                <div className="inner">

                    <Header></Header>
                    <Title/>

                    <GroupContainer/>
                    
                    <div className="pagination">
                        <Pagination/>
                    </div>

                </div>

            </div>
           
    )
}

export default Group ;