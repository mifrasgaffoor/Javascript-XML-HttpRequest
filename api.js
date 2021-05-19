let request = new XMLHttpRequest ;
request.open('GET' , "https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload = () =>{
   let data =  JSON.parse(request.response);
   var bb = data.forEach(element => {
    console.log(element.population)
    const name1 = document.createElement("p");
    name1.textContent=(element.population);
     document.querySelector("body").appendChild(name1);  
   });
   

  
   

// let pop = tot.reduce((acc, item) => {
//     return acc +  item;
// }, 0)






    //  const asia = data.filter((item) => {
    //     if(item.region=="Asia"){
    //         console.log(item.name);
    //         const name1 = document.createElement("p");
    //           name1.textContent=(item.name);
    //           document.querySelector("body").appendChild(name1);
    //         return item==="Asia"
    //     }
        
    //  })



  
    





    // const population = data.filter((item) => {
    //     if(item.population<=200000){
    //         console.log(item.name);
    //         const name1 = document.createElement("p");
    //           name1.textContent=(item.name);
    //           document.querySelector("body").appendChild(name1);
    //         return item.name
    //     }
        
    //  })


//  data.forEach(element => {
     
//      console.log(element.name )
//      console.log(element.capital )
//      console.log(element.flag )
    
//      const capital1 = document.createElement("p");
//      capital1.textContent=(element.capital);
//      document.querySelector("body").appendChild(capital1);

//      const name1 = document.createElement("p");
//      name1.textContent=(element.name);
//      document.querySelector("body").appendChild(name1);

//      const image = document.createElement("img");
//      image.setAttribute("src" , element.flag)
//      document.querySelector("body").appendChild(image);

//  });

//    let total__population  = data.population;
//    let pop1 =  total__population .reduce((acc, item) => {
//        return  acc +  item;
//    }, 0)
// console.log(pop1)



















    }







   



