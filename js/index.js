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



//details button click for data specific pet
// const loaddetails=(petdata)=>{    
//     // console.log(petData);
//     fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petdata}`)
//     .then((res)=>res.json())
//     .then((data)=>console.log(data.petData))
//     .catch((error)=>console.log(error));   
// };

// //display details
// const displaydetails=(petData)=>{
//     const PetDetails=document.getElementById("pet-details");
//     petData.forEach((item)=>{
//         console.log(item);
//         const card_details=document.createElement("div");
//         card_details.innerHTML=`
//         <div class="card bg-base-100 w-96 shadow-md mt-5">
//         <img src="${item.image}" calss="object-cover w-full h-32 rounded-sm"/>
//         </div>
//         `

//     });

// };




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
        console.log(item.petId);
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
<button onclick="loadpetdetails('${item.petId}')" class="btn text-[#0E7A81] w-16 font-bold">Details</button>
</div>
        `
        cardcontainer.append(card_div);

    });

};

laodcard();




// Fetch and display pet details in modal
const loadpetdetails = (petId) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
        .then(res => res.json())
        .then(data => showModal(data.petData)) // Updated key
        .catch(error => console.log(error));
};

// Function to open the modal with pet details
const showModal = (petData) => {
    const modal = document.getElementById("pet-details");
    const modalContent = document.getElementById("modal-content");
    const cardContainer = document.getElementById("card-details"); // Background container

    modalContent.innerHTML = `
        <div class="p-5">
         <img src="${petData.image}" class="w-full h-48 object-cover mt-2 rounded" />
            <h2 class="text-xl font-bold">${petData.pet_name}</h2>
             <div class="grid grid-cols-2">
             <div class="flex flex-1 gap-1">
             <div class="mt-1"><img src="https://maxst.icons8.com/vue-static/icon/svg/detailed.svg"/></div>
            <div><p><strong>Breed:</strong> ${petData.breed}</p></div>
             </div>
             <div class="flex flex-1">
             <div><img src="https://maxst.icons8.com/vue-static/icon/svg/copy.svg" class="h-5 w-5"/></div>
            <div><p><strong>Birth:</strong> ${petData.date_of_birth}</p></div>
            </div>
             </div>
             

             <div class="grid grid-cols-2">
             <div class="flex flex-1 gap-1">
             <div class="mt-1"><img src="https://img.icons8.com/?size=32&id=cOGxoI2sh0Zg&format=png"class="h-5 w-5"/></div>
            <div><p><strong>Gender:</strong> ${petData.gender}</p></div>
             </div>
             <div class="flex flex-1">
             <div><img src="https://img.icons8.com/?size=32&id=44176&format=png" class="h-5 w-5"/></div>
            <div><p><strong>Price:</strong> ${petData.price}</p></div>
            </div>
             </div>

            <div class="flex flex-1 gap-1">
             <div class="mt-1"><img src="https://img.icons8.com/?size=64&id=Zm65G7peo0yW&format=png" class="h-5 w-5"/></div>
            <div><p><strong>Vaccinated status:</strong> ${petData.vaccinated_status}</p></div>
            </div>

            <div>
            <strong class="mt-1">Details Information</strong>
            <p class="mt-1">${petData.pet_details}</p></div>

            <button onclick="closeModal()" class="btn bg-[#0E7A81] text-white mt-3 w-2/2 ">Close</button>
        </div>
    `;

    modal.style.display = "block"; // Show modal
    cardContainer.classList.add("blur-background");// Add blur effect
};

// Function to close the modal
const closeModal = () => {
    document.getElementById("pet-details").style.display = "none"; 
    document.getElementById("card-details").classList.remove("blur-background"); // Remove blur
};















