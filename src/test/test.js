import React from "react";
import {useState} from 'react';


function Header(props){
   
    return <header>
        <h1><a href="/Test" onClick={(event)=>{
            event.preventDefault();
            props.onChangeMode();
        }}>{props.title}</a></h1>
    </header>
}

function Nav(props){
    const lis =[
    ]

    for (let i=0; i<props.topics.length; i++){
        let t = props.topics[i];
        lis.push(
            <li key={t.id}>
                <a id={t.id}href={"/Test"+t.id} onClick={(event)=>{
                    event.preventDefault();
                    props.onChangeMode(event.target.id);
                 }}>{t.title}</a>
            </li>)
    }

    return <nav>
        <ul>
            {lis}
        </ul>
    </nav>
}

function Article(props){
    return <article>
        <h2>{props.title}</h2>
        {props.body}
    </article>
}

function Test(){
   
    let [mode,setMode] = useState("WELCOME");
    
    const topics = [
        {id:1, title:"html",body:'html is...'},
        {id:2, title:"css",body:'css is...'},
        {id:3, title:"js",body:'js is...'}
    ]

    let content = null ;

    console.log("11111111"+mode);

    if(mode === "WELCOME"){

        console.log("welcomeMode");

        content = <Article title="Welcome" body="Hello, World"></Article>

    }else{

        console.log("readMode")


        content = <Article title="Read" body="Hello, React"></Article>

    }

    function onSetMode(value){

        if(value === "w"){

            setMode("WELCOME")

        }else{
            setMode("READ")
        }
    


    }


    return (

        <div>
            <Header title="React" onChangeMode={onSetMode("w")

                // setMode = ('READ');

                // console.log(setMode+"after"+mode);


            }></Header>


            <Nav topics={topics} onChangeMode={onSetMode("r")
                
                // console.log(mode);
                // setMode = ("READ");

                // console.log(setMode+"after"+mode);

            }></Nav>



            {content}

        </div>

    )


};

export default Test;