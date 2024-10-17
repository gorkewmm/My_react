import React, { useState } from "react";
import "../css/currency.css";
import { FaArrowCircleRight } from "react-icons/fa";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_RGgr9ttHgcPy6o0veRQFabdihKVRDOsTo4BtmloK";
function Currency() {
  const [amount, setAmount] =useState(0)
  const [fromCurrency, setfromCurrency] = useState("USD")
  const [toCurrency, settoCurrency] = useState("TRY")
  const [result, settoResult] = useState(0)

  
  const exchange = async()=>{
   const response = await axios.get(BASE_URL+"?apikey="+API_KEY+"&base_currency="+fromCurrency)
   console.log(response.data.data[toCurrency])

   const final = amount * (response.data.data[toCurrency])
   settoResult(final.toFixed(2)) // virgülden sonra 2 basamak aldım
  }

  return (
    <div className="currency-div">
      <div
        style={{
          width: "100%",
          fontFamily: "arial",
          backgroundColor: "black",
          color: "white",
          textAlign: "center"
        }}
      >
        <h3>DÖVİZ KURU UYGULAMASI</h3>
      </div>

      <div style={{ marginTop: "25px" }}>
        <input
          value={amount}
          onChange={(e)=> setAmount(e.target.value)}
          type="number"
          className="amount"
        />

        <select
          value={fromCurrency}
          onChange={(e)=>setfromCurrency(e.target.value) }
          className="from-currency-option"
        >
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>

        <FaArrowCircleRight className="arrow" />

        <select
          value={toCurrency}
          onChange={(e)=> settoCurrency(e.target.value)}
          className="to-currency-option"
        >
          <option>TRY</option>
          <option>USD</option>
          <option>EUR</option>
        </select>

        <input
          value={result}
          onChange={(e)=> settoResult(e.target.value)}
          type="number"
          className="result"
        />
      </div>

      <div>
        <button onClick={exchange}>
          çevir
        </button>
      </div>
    </div>
  );
}

export default Currency;
