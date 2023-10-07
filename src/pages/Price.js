import getHash from "../utils/getHash";
import getData from "../utils/getData";

const Price = async () => {
  const id = getHash();
  console.log(id);
  const price = (await getData(id))[0];
  console.log(price[0]);

  const view = `
            <ul class="list-group mt-4">
                <li class="list-group-item"><div class="fw-bold">Symbol:</div> ${price.symbol}</li>
                <li class="list-group-item"><div class="fw-bold">Name:</div> ${price.name}</li>
                <li class="list-group-item"><div class="fw-bold">Nameid:</div> ${price.nameid}</li>
                <li class="list-group-item"><div class="fw-bold">Rank:</div> ${price.rank}</li>
                <li class="list-group-item"><div class="fw-bold">Price_usd:</div> ${price.price_usd}</li>
                <li class="list-group-item"><div class="fw-bold">Percent_change_24h:</div> ${price.percent_change_24h}</li>
                <li class="list-group-item"><div class="fw-bold">Percent_change_1h:</div> ${price.percent_change_1h}</li>
                <li class="list-group-item"><div class="fw-bold">Percent_change_7d:</div> ${price.percent_change_7d}</li>
                <li class="list-group-item"><div class="fw-bold">Price_btc:</div> ${price.price_btc}</li>
                <li class="list-group-item"><div class="fw-bold">Market_cap_usd:</div> ${price.market_cap_usd}</li>
                <li class="list-group-item"><div class="fw-bold">Volume24:</div> ${price.volume24}</li>
                <li class="list-group-item"><div class="fw-bold">Volume24a:</div> ${price.volume24a}</li>
                <li class="list-group-item"><div class="fw-bold">Csupply:</div> ${price.csupply}</li>
                <li class="list-group-item"><div class="fw-bold">Tsupply:</div> ${price.tsupply}</li>
                <li class="list-group-item"><div class="fw-bold">Msupply:</div> ${price.msupply}</li>
            </ul>
    `;
  return view;
};
export default Price;
