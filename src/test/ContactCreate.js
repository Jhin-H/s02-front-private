import React from "react";
import Input from "../common/elements/Input";


function inputTest(){
    alert("sss")

};


export default class ContactCreate extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name:'',
            phone:''
        };

        this.handleChange = this. handleChange.bind(this);
        this.handleClick =this.handleClick.bind(this);
        //리액트 초창기 버젼. 규칙
    }

    handleChange(e){
        let nextState={};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState)
    }

    handleClick(){

        const contact = {
            name : this.state.name,
            phone: this.state.phone
        }

        this.props.onCreate(contact);

        this.setState({
            name:'',
            phone:''
        });

    }


    render(){
        return(
            <div>
                <h2></h2>
                <p>
                    <Input
                    onChange={inputTest}
                    
                    />
                    <input 
                        type="text"
                        name="name" 
                        placeholder="이름"
                        value={this.state.name}
                        onChange={this.handleChange}>
                    </input>

                    <input 
                        type="text"
                        name="phone" 
                        placeholder="전화번호" 
                        value={this.state.phone}
                        onChange={this.handleChange}>

                     </input>
                </p>
                <button onClick={this.handleClick}>추가</button>
            </div>
        )
    }
}

// ContactCreate.prototypes = {
//     onCreate: React.PropTypes.func
// };

// ContactCreate.defaultProps ={
//     onCreate: () => {console.error("onCreate not defined");}
// }