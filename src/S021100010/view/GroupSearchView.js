import React,{useState} from "react";
import ImgSecondaryBtn from "../../common/elements/ImgSecondaryBtn";
import Input from '../../common/elements/Input';
import ImgPrimaryBtn from  "../../common/elements/ImgPrimaryBtn";
import OrgRegModal from "../../S021100020/view/OrgRegModal";
import "../../common/css/searchBox.css"


function GroupSearchView (props) {

    const [orgRegOpen, setOrgRegOpen] = useState(false) ;
    const {classes} = props ;

    const onOrgRegOpenModal = () =>{
        setOrgRegOpen(true);
    }

    const onOrgRegCloseModal = () =>{
        alert("onOrgRegCloseModal start ============> ") ;
        alert(orgRegOpen)
        setOrgRegOpen(false);
        alert(orgRegOpen)
    }


    return (
       
            <div className="searchBox">
                <div className="layer1">
                    <Input/><Input/><ImgSecondaryBtn/>
                </div>
                <div className="layer2-icon">
                    <div className="iconWrap-left">
                        <div onClick={onOrgRegOpenModal}>
                            <ImgPrimaryBtn iconText={'등록'}/>
                            {orgRegOpen && <OrgRegModal  closeModal={onOrgRegCloseModal} /> }
                        </div>
                        
                        <ImgPrimaryBtn iconText={"수정"}/>
                        <ImgPrimaryBtn iconText={"삭제"}/>
                    </div>
                    <div className="iconWrap-right">
                        <ImgPrimaryBtn iconText={"다운로드"}/>
                    </div>
                </div>
            </div>
    );
}

export default GroupSearchView;