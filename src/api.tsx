export const fetchCoins = async () => {
  return await await fetch("https://api.coinpaprika.com/v1/coins").then(
    (response) => response.json()
  );
};
