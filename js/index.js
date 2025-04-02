// loadbutton
const loadbutton=()=>{
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res)=>res.json())
    .then((data)=>displaybutton(data.categories))
    .catch((error)=>console.log(error));

};
// displaybutton
const displaybutton=(categories)=>{
    const buttoncontainer=document.getElementById("category-button");
    
categories.forEach((item) => {
    console.log(item);
const buttondiv=document.createElement("div");
console.log(item.category);
buttondiv.innerHTML=`
<button onclick="loadcategory('${item.category}')" class="btn">
<img src="${item.category_icon}" class="h-6 w-6"/>
${item.category}
</button>
`;
buttoncontainer.append(buttondiv);
});


};
loadbutton();

// id wise button click handler
const loadcategory=(categoryName)=>{    
    console.log(categoryName)
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoryName}`)
    .then((res)=>res.json())
    .then((data)=>displaycard(data.data))
    .catch((error)=>console.log(error));   
};


 

// load-card
const laodcard=()=>{
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res)=>res.json())
    .then((data)=>displaycard(data.pets))
    .catch((error)=>console.log(error));

};

// display-card
const displaycard=(pets)=>{
    const cardcontainer=document.getElementById("card-details");
    cardcontainer.innerHTML = ""; 
    
    pets.forEach((item)=>{
        console.log(item);
        const card_div=document.createElement("div");
        card_div.innerHTML=`
        <div class="card bg-base-100 w-64 shadow-md mt-5">
  <figure>
    <img
      src="${item.image}" class="object-cover w-60 h-32 rounded-sm"
      alt="Shoes" />
  </figure>
  <div class="card-body">
  <p>${item.pet_name}</p>
  <div class="flex flex-1 gap-2">
  <div class="mt-1"><img src="https://maxst.icons8.com/vue-static/icon/svg/detailed.svg"/></div>
  <div>Breed: ${item.breed}<div>
  </div>
  <div class="flex flex-1 ml-[-25px] gap-2">
  <div><img src="https://maxst.icons8.com/vue-static/icon/svg/copy.svg" class="h-5 w-5"/></div>
  <div>Birth: ${item.date_of_birth}<div>
  </div>
   <div class="flex flex-1 ml-[-30px] gap-2">
  <div><img src="https://img.icons8.com/?size=32&id=cOGxoI2sh0Zg&format=png" class="h-5 w-5"/></div>
  <div>Gender: ${item.gender}<div>
  </div>
  <div class="flex flex-1 ml-[-27px] gap-2">
  <div><img src="https://img.icons8.com/?size=32&id=44176&format=png"  class="h-5 w-5"/></div>
  <div>Price: ${item.price}<div>
  </div>
  </div>
  
   </div><br>
   <hr class="w-40 text-white shadow-sm"><br>

   <button class="btn ml-[-20px]  w-14"><img src="https://img.icons8.com/?size=96&id=U6uSXVbuA1xU&format=png" class="w-16 h-6"></button>
<button class="btn text-[#0E7A81] font-bold  w-16">Adopt</button>
<button class="btn text-[#0E7A81] w-16 font-bold">Details</button>
</div>
        `
        cardcontainer.append(card_div);

    });

};

laodcard();












