const url = "https://api.coincap.io/v2";

async function getAssets() {
  try {
    const response = await (await fetch(`${url}/assets?limit=20`)).json();
    return response.data;
  } catch (err) {
    return err.response;
  }
}

async function getAsset(coin) {
  try {
    const response = await (await fetch(`${url}/assets/${coin}`)).json();
    return response.data;
  } catch (err) {
    return err.response;
  }
}

async function getAssetHistory(coin) {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();
  try {
    const response = await (
      await fetch(
        `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
      )
    ).json();
    return response.data;
  } catch (err) {
    return err.response;
  }
}

async function getMarkets(coin) {
  try {
    const response = await (
      await fetch(`${url}/assets/${coin}/markets?limit=5`)
    ).json();
    return response.data;
  } catch (err) {
    return err.response;
  }
}

async function getExchange(id) {
  try {
    const response = await (await fetch(`${url}/exchanges/${id}`)).json();
    return response.data;
  } catch (err) {
    return err.response;
  }
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange,
};
