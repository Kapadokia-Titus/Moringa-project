//declare url
const url =" http://localhost:3000/hotels";

//init function
function init(){

    // do a fetch get request
    fetch(url)
    .then(response=>response.json())
    .then(data =>{
        // get the ID of the container we'll populate data
        //loop through tha data and map it to our UI
        const container = document.getElementById('airbnbs');
        container.innerHTML = data.map(info =>setDataToUI(info))
        .join(" ")
    })

}
document.addEventListener('DOMContentLoaded', init);

//set data to a DOM
function setDataToUI(data){
   let ui = `<div class="mb-10 col-md-6" style="margin-bottom:30px">                             
   <div class="card" >
      <a href="" id="services-card">
         <div class="price">${data.price}<span>Ksh.</span>  / day</div>
         <div><img id="image" src="${data.image}"></div>
         <div class="description">
            <div class="row">
               <div class="col-sm-3"><h4 id="name">${data.name}</h4></div>
               <div class="col-sm-9">
                  <ul>
                  <li><span class="glyphicon glyphicon-user" aria-hidden="true"></span><p>3 persons</p></li>
                  <li><span class="glyphicon glyphicon-signal" aria-hidden="true"></span><p>Free WI-FI</p></li>
                  <li><span class="glyphicon glyphicon-cutlery" aria-hidden="true"></span><p>Kitchen</p></li>
                  <li><span class="glyphicon glyphicon-tint" aria-hidden="true"></span><p>Bathroom</p></li>
               </ul>                
               </div>
            </div>
         </div>
      </a>
   </div>
  
                                                  
 </div>`

 return ui;
}

function handleOnClick(){
   let card = document.getElementById('services-card');
   card.addEventListener('click', (event)=>{
      event.preventDefault();

      //get details
      let price = document.getElementById('price').value;
      let image = document.getElementById('image').value;
      let name = document.getElementById('name').value;

      //create a json object
      const data = { "username": name,
                       "image":image,
                       "price":price

        };


   //persist data accross pages
   sessionStorage.setItem("cart",data)
   console.log("Reached here"+JSON.stringify(data));
   })
   
}