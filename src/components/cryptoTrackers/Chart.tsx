import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../../api";
import ApexChart from "react-apexcharts";
interface IHistorical {
  close: string;
  high: string;
  low: string;
  market_cap: number;
  open: string;
  time_close: number;
  time_open: number;
  volume: string;
}
interface ChartProps {
  coinId: string;
}

export default function Chart() {
  const { coinId } = useOutletContext<ChartProps>();
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  console.log(isLoading, data);
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            { name: "hello", data: [1, 2, 3, 4, 5, 6] },
            { name: "sales", data: [15, 17, 15, 18, 56] },
          ]}
          options={{
            chart: {
              height: 500,
              width: 500,
            },
          }}
        />
      )}
    </div>
  );
}
