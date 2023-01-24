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

 function show(anything) {
   document.querySelector(".box").value = anything;
   const url =`https://restcountries.com/v3.1/region/${anything}`;
  //  console.log(url);
   
     const bdiz = document.querySelector(".flags");
    
       const response = fetch(url);
       response.then(data => {return data.json()})
       .then(data =>{
          
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
       }
         
       )
      
   }
 let dp = document.querySelector(".custom-select");
 dp.onclick = () => {
   dp.classList.toggle("active");
 };