import React,{useState} from "react";
import ImgSecondaryBtn from "../../common/elements/ImgSecondaryBtn";
import Input from '../../common/elements/Input';
import SelectBox from "../../common/elements/SelectBox";
import ImgPrimaryBtn from  "../../common/elements/ImgPrimaryBtn";
import EvtRegModal from "../../S022300050/view/EvtRegModal";
import "../../common/css/searchBox.css"


function EventSearchView (props) {

    const [EvtRegOpen, setEvtRegOpen] = useState(false) ;
    const {classes} = props ;

    const onEvtRegOpenModal = () =>{
        setEvtRegOpen(true);
    }

    const onEvtRegCloseModal = () =>{
        alert("onOrgRegCloseModal start ============> ") ;
        setEvtRegOpen(false);
       
    }


    return (
       
            <div className="searchBox">
                <div className="layer1">
                    <Input/><Input/><SelectBox/><ImgSecondaryBtn/>
                </div>
                <div className="layer2">
                   
                        <div onClick={onEvtRegOpenModal}>
                            <ImgPrimaryBtn iconText={'등록'}/>
                            {EvtRegOpen && <EvtRegModal  closeModal={onEvtRegCloseModal} /> }
                        </div>
                        
                        <ImgPrimaryBtn iconText={"수정"}/>
                        <ImgPrimaryBtn iconText={"삭제"}/>
                        <ImgPrimaryBtn iconText={"비용등록"}/>
                    
                </div>
            </div>
    );
}

export default EventSearchView;