import { useEffect, useState } from "react";
import "./exchange-card.css";

export default function ExchangeCard() {
  const [currencies, setCurrencies] = useState([]);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("PHP");
  const [amount, setAmount] = useState("1");
  const [result, setResult] = useState(null);
  const [date, setDate] = useState([]);

  useEffect(()=>{

        fetch("https://open.er-api.com/v6/latest/USD")
        .then((res)=>res.json())
        .then((data) => setDate(data))

  },[]);

  // Fetch currency codes
  useEffect(() => {
    const fetchCurrencies = async () => {
      
      const res = await fetch("https://open.er-api.com/v6/latest/USD");
      const data = await res.json();
      setCurrencies(Object.keys(data.rates)); // only codes
    
    };

    fetchCurrencies();
  }, []);

  // Conversion
  const convert = async () => {
    if (amount === "" || from === "" || to === "") return;

      const res = await fetch(`https://open.er-api.com/v6/latest/${from}`);
      const data = await res.json();
      const rate = data.rates[to];
      setResult((amount * rate).toFixed(4));

  };

  const Switch = () => {

    const tempFrom = from;
    setFrom(to);
    setTo(tempFrom);

  }

  useEffect(() => {
    convert();
  }, [amount, from, to]);

  return (
    <div id="exchange-rate-container">
            <h3 id="time">
                Time Last Update: {date.time_last_update_utc}
            </h3>

<div id="rate">
      <div className="row">
        <label>From:</label>
        <select value={from} onChange={(e) => setFrom(e.target.value)}>
          {currencies.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
      </div>

    <button onClick={Switch} id="switch-btn">switch</button>

      <div className="row">
        <label>To:</label>
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          {currencies.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
      </div>
</div>

      <div className="row">
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => {
            const value = e.target.value;
            if (value === "") {
              setAmount("");
              return;
            }
            setAmount(Number(value));
          }}
        />
      </div>

      <div className="result-box">
        {result !== null && (
          <p>
            {amount} {from} = <strong>{result}</strong> {to}
          </p>
        )}
      </div>
    </div>
  );
}
