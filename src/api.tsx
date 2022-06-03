const BASE_URL = "https://api.coinpaprika.com/v1";

export const fetchCoins = async () => {
  return await await fetch(`${BASE_URL}/coins`).then((response) =>
    response.json()
  );
};

export const fetchCoinInfo = async (coinId: string | undefined) => {
  return await await fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
};

export const fetchCoinTickers = async (coinId: string | undefined) => {
  return await await fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
};
