import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { addSearch } from "../Redux/action.js";

export const SearchDetails = () => {
  const [data, setData] = useState([]);
  const [reword, setReword] = useState("");
  const [singleData,setSingleData]=useState({});
  const word = useSelector((store) => store.words.words);
  const dataBs=useSelector((store)=>store.datas.datas);

  // console.log("dataBS inside searchDetails.jsx", dataBs)

  useEffect(() => {
    getData(word)
  }, [dataBs]);
  
   function getData(elem){
    let x=dataBs.filter((res) => res.title.includes(elem));
    setData(x);
  }

  


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleKeypress = (e) => {
    let key = e.charCode; //||  e.key || e.keyCode
    if (key === 13) {
      dispatch(addSearch(reword)); //action => dispatch => store => view
      getData(reword)
      navigate(`/search?q=${reword}`);
    }
  };

  const handleChange = (e) => {
    setReword(e.target.value);
  };

  const handleClick=()=>{
    dispatch(addSearch(reword)); //action => dispatch => store => view
    getData(reword)
      navigate(`/search?q=${reword}`);
  }

  // DATE sorting

  const datesortByDesc = () => {
    data.sort(function (a, b) {
      return b.creation_date - a.creation_date;
    });
    setData([...data]);
    //  console.log(data);
  };

  const datesortByAsc= () => {
    data.sort(function (a, b) {
      return a.creation_date - b.creation_date;
    });
    setData([...data]);
    //  console.log(data);
  };

  //QUALITY sorting 

  const qualitysortByDesc = () => {
    data.sort(function (a, b) {
      return b.quality - a.quality;
    });
    setData([...data]);
    //  console.log(data);
  };

  const qualitysortByAsc= () => {
    data.sort(function (a, b) {
      return a.quality - b.quality;
    });
    setData([...data]);
    //  console.log(data);
  };

  const handleExplicit=()=>{
    let x=data.filter((res) => res.explicit == true)
    setData([...x])
  }

  // Alphabets order onClick={datesortBy
// onClick={datesortBy

const datesortBDesc = () => {
  data.sort(function (a, b) {
    return b.title - a.title;
  });
  setData([...data]);
  //  console.log(data);
};

const datesortBAsc= () => {
  data.sort(function (a, b) {
    return a.title - b.title;
  });
  setData([...data]);
  //  console.log(data);
};



  return (
    <div>
      <div>
        <span onClick={()=>{
          navigate("/")
        }}>
        <img
          src="https://imgs.search.brave.com/pC67KXWZACgFqhaeCuoVNIIyeGFW4PU0yAmPBUVG-Nw/rs:fit:1404:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5T/cUVJQ0M1OVBMMVZy/ZGVmaEdFcXFnSGFD/ZyZwaWQ9QXBp"
          alt="Google"
          style={{ width: "50px", marginRight: "20px", marginTop: "20px" }}
        />
        </span>
        <input
          className="search-box"
          type="text"
          placeholder="Search"
          onChange={handleChange}
          onKeyPress={handleKeypress}
        />
        <button onClick={handleClick}>Search</button>
      </div>
      <br />
      <br />
      <div>

      {/* <button className="sortByRentDesc" onClick={sortByDesc}>
          Rent High to low
        </button> */}

        <button onClick={datesortByAsc} >Sort A-Z</button>
      <button onClick={datesortByDesc} >Sort Z-A</button>
      <button onClick={datesortByAsc}>Sort by Date (Asc) </button>
      <button onClick={datesortByDesc} > Sort by Date (Desc)</button>
      <button onClick={qualitysortByAsc} >Sort by quality (Asc)</button>
      <button onClick={qualitysortByDesc} >Sort by quality (Desc)</button>
      <button onClick={handleExplicit}>Filter Explicit</button>
        <br />
        {data.map((e) => {
          return (
            <div key={e.id} className="flexdiv" onClick={()=>{

              setSingleData(e);
              navigate(`/page/${e.id}`)
            }}>
              <p>{e.url}</p>
              <span>
                <a href="">{e.title}</a>
              </span>{" "}
              | <span>{e.author}</span>
              <p>{e.description}</p>
              <h3>{e.creation_date}</h3>
              <span>Explicit: {e.explicit ? "Yes" : "No"}</span> |{" "}
              <span>Quality %: {e.quality}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
