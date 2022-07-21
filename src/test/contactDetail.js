
import React from "react";

export default class ContactDetail extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            isEdit : false,
            name : "",
            phone : ""
        }

        this.handleToggle =this.handleToggle.bind(this);
    }


    handleToggle(){
        this.setState({
            isEdit :!this.state.isEdit
        });
    }
    render(){
        const details = (


        <div>
            <p>{this.props.contact.name}</p>
            <p>{this.props.contact.phone}</p>
        </div>

        );
        const view =this.state.isEdit ? (<div></div>) : details;
        const blank = (<div>선택되지 않음</div>);
        return (
            <div>
                <h2>상세정보</h2>
                {this.props.isSelected ? view : blank}
                
                <p className="btnWrap">
                    <button onClick={this.props.onRemove}>삭제</button>
                    <button onClick={this.handleToggle}>
                        {this.state.isEdit ? 'ok' : '수정'}
                    </button>
                </p>
                
            </div>
        )
    };
}

ContactDetail.defaultProps = {
    contact: {
        name: '',
        phone: ''
    },
    onRemove: ()=>{alert("deleted? ")}
}