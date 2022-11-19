import React, { useState, useEffect } from "react";
import SideNavBar from "../../NavBar/SideNavBar";
import "./../styles/style.css";

function Caluculator() {
  const [sum, setSum] = React.useState(0);
  const [diff, setDiff] = React.useState(0);
  const [clear, setClear] = React.useState(false);
  const [num, setNum] = useState(0);

  useEffect(() => {
    document.querySelector("#result").value = "";
  }, []);

  useEffect(() => {
    if (clear) document.querySelector("#result").value = "";
  });

  const Add = (e) => {
    e.preventDefault();
    if (clear) {
      setClear(false);
    }
    let currentNum = document.querySelector("#num").value;
    if (currentNum == "") {
      return;
    }
    let sum1 = sum + parseInt(currentNum);
    setSum(sum1);
    document.querySelector("#num").value = "";
  };

  const Subtract = (e) => {
    e.preventDefault();
    if (clear) {
      setClear(false);
    }
    let currentNum = document.querySelector("#num").value;
    if (currentNum == "") {
      return;
    }
    let sum1 = sum - parseInt(currentNum);
    setSum(sum1);
    document.querySelector("#num").value = "";
  };

  const Multiply = (e) => {
    e.preventDefault();
    if (clear) {
      setClear(false);
    }
    let currentNum = document.querySelector("#num").value;
    if (currentNum == "") {
      return;
    }
    let sum1 = sum * parseInt(currentNum);
    setSum(sum1);
    document.querySelector("#num").value = "";
  };

  const Divide = (e) => {
    e.preventDefault();
    if (clear) {
      setClear(false);
    }
    let currentNum = document.querySelector("#num").value;
    if (currentNum == "") {
      return;
    }
    let sum1 = sum % parseInt(currentNum);
    setSum(sum1);
    document.querySelector("#num").value = "";
  };

  const Clear = (e) => {
    e.preventDefault();
    console.log("sum:", sum);
    document.querySelector("form").reset();
    setClear(true);
    setSum(0);
  };

  return (
    <>
      <SideNavBar />

      <div className="Calculator">
        <div className="calci">
          <div className="calculator-title">
            <h1>Calculator</h1>
          </div>

          <form>
            <input
              type="text"
              id="result"
              value={sum}
              onChange={(e) => {
                setSum(e.target.value);
              }}
            />
            <br />
            <input type="text" id="num" placeholder="enter a number" />{" "}
            <br></br>
            <button id="assignment" onClick={Add}>
              +
            </button>
            <button id="assignment" onClick={Subtract}>
              -
            </button>
            <button id="assignment" onClick={Multiply}>
              *
            </button>
            <button id="assignment" onClick={Divide}>
              %
            </button>
            <button id="assignment" onClick={Clear}>
              Clear
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Caluculator;
