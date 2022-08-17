import React from "react";
import Header from "../common/Header";
import SignContainer from "../S022300010/container/SignContainer";
import Pagination from"../common/elements/Pagination";
import "../common/css/page.css";



const Sign = () =>{
    return (


            
            <div className="Wrap">
                <div className="inner">

                    <Header></Header>

                    <SignContainer/>
                    
                    <div className="pagination">
                        <Pagination/>
                    </div>

                </div>

            </div>
           
    )
}

export default Sign ;