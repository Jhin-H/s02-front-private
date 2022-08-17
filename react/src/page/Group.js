import React from "react";
import "../common/css/page.css";
import Header from "../common/Header";
import GroupContainer from "../S021100010/container/GroupContainer";
import Pagination from"../common/elements/Pagination";


const Group = () =>{
    return (

            
            <div className="Wrap">
                <div className="inner">

                    <Header></Header>
                    <GroupContainer/>
                    
                    <div className="pagination">
                        <Pagination/>
                    </div>

                </div>

            </div>
           
    )
}

export default Group ;