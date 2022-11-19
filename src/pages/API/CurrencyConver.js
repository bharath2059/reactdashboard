import React, { useEffect, useState } from "react";
import axios from "axios";
import "./../styles/style.css";
import SideNavBar from "../../NavBar/SideNavBar";

const CurrencyConvert = () => {
  const [rates, setRates] = useState("");
  const [exchangeRate, setExchangeRate] = useState({});
  const [firstCurrency, setFirstCurrency] = useState(0);
  const [secondCurrency, setSecondCurrency] = useState(0);

  let URL =
    "https://api.exchangeratesapi.io/v1/latest?access_key=6e8202ba3b24f80931a9b44ba11a4a77";
  const getData = async () => {
    const data = await axios.get(URL);
    // console.log(data.data);
    setExchangeRate(data.data["rates"]);
    console.log(exchangeRate);
    // console.log(array);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(firstCurrency, secondCurrency);
    let result = firstCurrency / secondCurrency;
    setRates(result);
  });

  return (
    <>
      <SideNavBar />
      <div className="currency">
        <div className="currency Body">
          <h1>Currency Converter</h1>
          <label>From:</label>
          <select
            name="firstCurrency"
            id="firstCurrency"
            value={firstCurrency}
            onChange={(e) => setFirstCurrency(parseFloat(e.target.value))}
          >
            {Object.keys(exchangeRate).map((currency) => {
              return <option value={exchangeRate[currency]}>{currency}</option>;
            })}
          </select>
          <br />
          <label>To :</label>
          <select
            name="secondCurrency"
            id="secondCurrency"
            value={secondCurrency}
            onChange={(e) => setSecondCurrency(parseFloat(e.target.value))}
          >
            {Object.keys(exchangeRate).map((currency) => {
              return <option value={exchangeRate[currency]}>{currency}</option>;
            })}
          </select>
          <div>
            <p>value:{rates}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrencyConvert;
