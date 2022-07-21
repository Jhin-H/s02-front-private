import React from "react";
import { useState } from "react";
import {  BiSearchAlt2 } from "react-icons/bi";
import axios from "axios";

function SearchBar({ onClick, onChange }) {
  return (
    
      <div className="inputWrap">
        <input
          type="search"
          className="form-control rounded"
          placeholder="이름 입력"
          onChange={onChange}
        />
        <button type="button" id="search_btn" onClick={onClick}>
          <BiSearchAlt2 className="search_icon"></BiSearchAlt2>
        </button>
      </div>
    
  );
}

function Result({ member }) {
  var lis = [];
  for (var i = 0; i < member.length; i++) {
    var item = member[i];
    lis.push(
      <ol key={item.memberCd}>
        이름 :{item.memberNm}
      </ol>
    );
  }

  return (
    <>
      <div className="result">
        <div id="result_text">{lis}</div>
        <br />
      </div>
    </>
  );
}

function SearchTest() {
  const [member, setMember] = useState([]);
  const [item, setItem] = useState("");
  const key = process.env.REACT_APP_API_KEY;
  console.log(key);
  const query = encodeURIComponent(item);
  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${key}&movieNm=${query}`;

  const searchItem = event => {
    setItem(event.target.value);
    console.log(item);
  };
  console.log(url);

  const fetchMovie = async () => {
    console.log("클릭");
    try {
      const response = await axios.get(url);
     
      const newMovieList = response.data.movieListResult.movieList;

      
      console.log(newMovieList);
      setMovie(newMovieList);
      console.log(movie);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="searchWrap">
      
        <h2>회원 검색</h2>
        <SearchBar onClick={fetchMovie} onChange={searchItem}></SearchBar>

        <Result movie={movie}></Result>
    
    </div>
  );
}

export default SearchTest;