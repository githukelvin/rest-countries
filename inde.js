async function getAllCountries() {
  const bdiz = document.querySelector(".flags");
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
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

getAllCountries();

const tog = document.querySelector(".toggle");
tog.addEventListener("click", () => {
  document.body.classList.toggle("dark-background");
});
