import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Coins from "./components/Coins";
import Coin from "./pages/Coin";
import Navbar from "./components/Navbar";



function App() {
  const [coins, setCoins] = useState([]);
  const [searchWord, setSearchWord] = useState('')

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase())
  })

  return (
    <>
      <Navbar setSearchWord={setSearchWord} />
      <Routes>
        <Route path="/" element={<Coins coins={filteredCoins} />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
