import React from "react";
import axios from "axios";
import { useState } from "react";
import styled from 'styled-components';

const Container = styled.div`

`


const Weather = () => {

    const API_KEY = "955cc320082645c1925f3b71a2830a37";
    const [location, setLocation] = useState('');
    const [result, setResult] = useState({});
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;


    
    const searchWeather = async(e) =>{
        if(e.key ==='Enter') {
            try{
                const data = await axios({
                    method: 'get',
                    url: url
                   
                })
                console.log(data);
                setResult(data);

            }
            catch (err){
                alert(err);
            }
        }

    }
    


    return (

            <Container>

                <div className="weather">

                   <input 
                    placeholder="도시를 입력하세요"
                    value={location}
                    onChange={(e)=>setLocation(e.target.value)}
                    type='text'
                    onKeyDown={searchWeather}
                    />
                    {Object.keys(result).length !== 0 && (

                         <div className="result">
                            <div className="city">{result.data.name}</div>
                            <div className="temp">
                            {Math.round(((result.data.main.temp - 273.15) * 10)) / 10}°C</div>
                            <div className="sky">{result.data.weather[0].main}</div>
                        </div>
                     )}

                   
                </div>
            </Container>
            
        
    );
    }

export default Weather;