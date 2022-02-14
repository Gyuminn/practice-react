//All Coins
//:id -> /btc -> detail

import { useParams } from "react-router-dom";

//btc/information
//btc/chart

export default function Coin() {
  const { coinId } = useParams();
  console.log(coinId);
  return <h1>Coin : {coinId}</h1>;
}
