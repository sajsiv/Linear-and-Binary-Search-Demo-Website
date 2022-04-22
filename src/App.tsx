import { useState } from "react";
import linearSearch from "./utils/linearSearch";
import dictionary from "./interfaces/dictionaryInterface";
import webstersDictionary from "./dictionary.json";
import BinarySearch from "./utils/binarySearch";
import './style.css'

function App(): JSX.Element {
  const [search, setSearch] = useState("");
  const dict = webstersDictionary as dictionary[];
  return (
    <>
      <div className="container">
        <div className="text">
          <h1>Linear and Binary Search</h1>
          <h3>Check out the run times!</h3>
        </div>
        <div className="form__group field">
          <input onChange={(e) => setSearch(e.target.value)} className="form__field" placeholder="Search the dictionary..."></input>
        </div>
        <button onClick={() => alert(linearSearch(dict, search)) } className="button-9">
          Linear Search
        </button>
        <button onClick={() => alert(BinarySearch(dict, search))} className="button-9">Binary Search</button>
      </div>
      <div className="imgcontainer">
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width="55" height="55"/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/YouTube_social_white_squircle.svg/800px-YouTube_social_white_squircle.svg.png" width="55" height="55"/>
      </div>
    </>
  );
}

export default App;
