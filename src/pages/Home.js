import getData from "../utils/getData";

const Home = async () => {
  const prices = await getData();

  const view = `
        <div class="Characters">
        ${prices.data
          .map(
            (price) => `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title mb-2 text-body-secondary">${price.symbol}</h5>

                <a href="#/${price.id}/" class="card-link">
                    <h5 class="card-title">${price.name}</h5>
                </a>
                
                <h6 class="card-subtitle mb-2 text-body-secondary">${price.nameid}e</h6>
                <p class="card-text">#${price.rank}</p>
                <a href="#" class="card-link">${price.price_usd}</a>
            </div>
        </div>
                `
          )
          .join("")}
        </div  
            `;
  return view;
};

export default Home;
