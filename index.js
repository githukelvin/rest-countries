async function getCountries(url) {
  const bdiz = document.querySelector(".flags");
  try {
    const response = await fetch(url);
    const data = await response.json();
    bdiz.innerHTML = data
      .map(
        ({
          name: { common },
          population,
          continents,
          capital,
          flags: { png },
        }) => {
          return `
        <div class="flag">
          <div class="img">
            <img src="${png}" alt="${common} flag">
          </div>
          <div class="details">
            <h2>${common}</h2>
            <h3>Population: <small>${population.toLocaleString()}</small></h3>
            <h3>Region: <small>${continents[0]}</small></h3>
            <h3>Capital: <small>${capital}</small></h3>
          </div>
        </div>
      `;
        }
      )
      .join("");
  } catch (error) {
    console.error(error);
  }
}

getCountries("https://restcountries.com/v3.1/all");

const tog = document.querySelector(".toggle");
tog.addEventListener("click", () => {
  document.body.classList.toggle("dark-background");
});

function show(region) {
  const url = `https://restcountries.com/v3.1/region/${region}`;
  getCountries(url);
}

let dp = document.querySelector(".custom-select");
dp.onclick = () => {
  dp.classList.toggle("active");
};

let seach = document.querySelector(".seach");
seach.addEventListener("click", () => {
  let inp = document.querySelector("input").value;
  let bar = document.querySelector(".bars");
  bar.style.display = "none";
  const url = `https://restcountries.com/v2/name/${inp}`;
  getCountries(url);
});
