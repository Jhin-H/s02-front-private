import React from "react";
import "../common/css/page.css";
import Header from "../common/Header";
import BudgetContainer from "../S021100060/container/BudgetContainer";
import Pagination from"../common/elements/Pagination";




const Budget = () =>{
    return (
       
       

            
            <div className="Wrap">
                <div className="inner">

                    <Header></Header>
                    <BudgetContainer/>
                    
                    <div className="pagination">
                        <Pagination/>
                    </div>

                </div>

            </div>
           
       
        
    )
}

export default Budget ;