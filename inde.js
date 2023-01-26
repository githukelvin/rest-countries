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

 let search = document.querySelector(".seach");

 search.addEventListener("click", () => {
   let inp = document.querySelector("input").value;
   let bar = document.querySelector(".bars");
   bar.style.display ="none";
     const url = `https://restcountries.com/v2/name/${inp}`;
     const bdz = document.querySelector(".flags");
     const bdiz = document.querySelector(".countries");
    bdz.innerHTML="";
       const response = fetch(url);
       response.then(data =>{ return data.json()})
       .then(data =>{
         const {
           name,
           population,
           languages,
           capital,
           flag,
           topLevelDomain,
           subregion,
           region,
           currencies,
           nativeName,
           borders,
         } = data[0];
        //  code  for getting the currency name for a country
        let targetKey = Object.entries(currencies).find(
          (e) => e[1].name
        );
       let code = targetKey[1].name; 

      //  code for getting languages in a country
         let h1 = document.createElement("h1");
         let smallElements = languages.map(
           (language) => `<small>${language.name}</small>`
         );
         let languageDiv = (h1.innerHTML = smallElements.join(" "));

        // code for  getting borders in a country
          function getBorder(){
           
            if(!data[0].hasOwnProperty("borders")){
              let p = document.createElement("p");
              p.innerHTML= "No borders";
              return p;
            }
             else{
                   let p = document.createElement("p");
                   let borderNames = borders.map((code) => `<p>${code}</p>`);

                   let para = (p.innerHTML = borderNames.join(" "));
                   return para;
            }
          }
        let all=getBorder()
     
         let div = `
               <p class="back" onclick="CLICKED(getAllCountries())" ><i class="fa-solid fa-arrow-left"></i> Back</p>   
                 <div class="country">
                    <div class="fimg">
                      <img src='${flag}' alt='${name} image'>
                      </div>
                        <div class="cinfo">
                          <h2>${name}</h2>
                          <div class="cdetails">
                           <div class="left">
                            <h1>Native Name : <small>${nativeName}</small></h1>
                            <h1>Population : <small>${population.toLocaleString()}</small></h1>
                            <h1>Region: <small>${region}</small></h1>
                            <h1>Sub Region : <small>${subregion}</small></h1>
                            <h1>Capital : <small>${capital}</small></h1>
                           </div>
                        <div class="right">
                            <h1>Top Level Domain: <small>${topLevelDomain}</small></h1>
                            <h1>Currencies :<small> ${code}</small></h1>
                           <h1>Languages: ${languageDiv}</h1>
                        </div>

                        </div>

                        <div class="border">
                            <h1>Border Countries:</h1>

                           <div class="pa">
                               ${all}
                           </div>
                        </div>
                    </div>
                 </div>
      `;

         bdiz.innerHTML = div;

       });
          })
function CLICKED(callback){
  callback;
  const bdz = document.querySelector(".flags");
  const bdiz = document.querySelector(".countries");
  bdiz.innerHTML = "";
    let bar = document.querySelector(".bars");
    bar.style.display = " flex";

}