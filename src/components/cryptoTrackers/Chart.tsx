import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../../api";

interface ChartProps {
  coinId: string;
}

export default function Chart() {
  const { coinId } = useOutletContext<ChartProps>();
  const { isLoading, data } = useQuery(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  console.log(isLoading, data);
  return <h1>{coinId}</h1>;
}
