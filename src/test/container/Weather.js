import React from "react";
import axios from "axios";
import styled from 'styled-components';
// import {searchWeather} from "../repository/repositoty";
// import {location , setLocation, getResult}  from '../store/store'
// import store from '../store/store'


const Container = styled.div`

`

const Weather = () => {

    

    return (

            <Container>

                <div className="weather">

                   <input 
                    placeholder="도시를 입력하세요"
                    // value={store.location}
                    // onChange={store.setLocation((event) => (event.target.value))}
                    type='text'
                    // onKeyDown={repository.searchWeather()}
                    />
                    {/* {Object.keys(result).length !== 0 && (

                         <div className="result">
                            <div className="city">{result.data.name}</div>
                            <div className="temp">
                            {Math.round(((result.data.main.temp - 273.15) * 10)) / 10}°C</div>
                            <div className="sky">{result.data.weather[0].main}</div>
                        </div>
                     )} */}

                        dfsdfdsfsfs
                   
                </div>

                
            </Container>
            
        
    );
    }

export default Weather;