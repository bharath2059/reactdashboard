import React, { useState } from "react";
import SideNavBar from "../../NavBar/SideNavBar";
import "./../styles/style.css";

const Dictionary = () => {
  //declaring the variables using useState
  const [input, onChangeInput] = useState("");
  const [def, setDef] = useState("");
  const [example, setExample] = useState("");

  const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  async function getWordDefination() {
    //fetching the data and catching the errors
    try {
      if (input.length > 0) {
        const EndURl = URL + input;
        let data = await fetch(EndURl).then((res) => res.json());
        setDef(data[0].meanings[0].definitions[0].definition);
        setExample(data[0].meanings[0].definitions[0].example);
        console.log(data[0].meanings[0].definitions);
      } else {
        alert("Enter any word");
      }
    } catch {
      alert("Didn't find that word");
      console.log("error");
    }
  }

  return (
    <>
      <SideNavBar />
      <div className="container">
        <div className="Dictionary">
          <h1>Dictionary</h1>
          <p>Enter any word and press enter to know meaning</p>
          <input
            className="inputText"
            type="text"
            value={input}
            onChange={(e) => {
              onChangeInput(e.target.value);
            }}
            placeholder="enter any word"
          ></input>
          <br />
          <button className="Check" onClick={getWordDefination}>
            Check
          </button>
          <br />
          <p> Meaning : {def}</p>
          <p>Example : {example}</p>
        </div>
      </div>
    </>
  );
};
export default Dictionary;
