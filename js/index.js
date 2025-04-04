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
    console.log(categoryName);
    const cardContainer = document.getElementById("card-details");
    // Show a loading spinner
    cardContainer.innerHTML = `
        <div class="flex justify-center items-center w-full h-40 ml-60">
            <div class="w-10 h-10 border-4 border-gray-300 border-t-[#0E7A81] rounded-full animate-spin"></div>
        </div>
    `;
    setTimeout(() => {
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoryName}`)
    .then((res)=>res.json())
    .then((data)=>{
        const pets = data.data;
        if (!pets || pets.length === 0) {
            displayErrorMesage(); 
        } else {
            displaycard(pets); 
        }
    })
    .catch((error)=>console.log(error));   
}, 2000);
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
  <p class="text-xl font-bold">${item.pet_name}</p>

  <div class="flex items-center gap-2 mt-2">
  <img src="https://maxst.icons8.com/vue-static/icon/svg/detailed.svg"  class="h-5 w-5"/>
  ${item.breed?`<p>Breed: ${item.breed}</p>`:`<p>Breed : unavailable</p>`}
  </div>

  <div class="flex items-center gap-2 mt-2">
  <img src="https://maxst.icons8.com/vue-static/icon/svg/copy.svg" class="h-5 w-5"/>
  ${item.date_of_birth?`<p>Birth: ${item.date_of_birth}</p>`:`<p>Birth : unavailable</p>`}
  </div>

   <div class="flex items-center gap-2 mt-2">
  <img src="https://img.icons8.com/?size=32&id=cOGxoI2sh0Zg&format=png" class="h-5 w-5"/>
 ${item.gender?`<p>Gender: ${item.gender}</p>`:`<p>Gender : unavailable</p>`}
  </div>

  <div class="flex items-center gap-2 mt-2">
  <img src="https://img.icons8.com/?size=32&id=44176&format=png"  class="h-5 w-5"/>
  <p>Price: ${item.price}</p>
  </div>
  
  <hr class="w-full border-gray-300 my-3">

   <div class="flex justify-between">
     <button onclick="loadpetImage('${item.petId}')" class="btn bg-gray-200 p-2 rounded"><img src="https://img.icons8.com/?size=96&id=U6uSXVbuA1xU&format=png" class="w-6 h-6"/></button>
     <button onclick="AdoptModal()" class="btn text-[#0E7A81] font-bold p-2 bg-gray-200 rounded">Adopt</button>
     <button onclick="loadpetdetails('${item.petId}')" class="btn text-[#0E7A81] font-bold p-2 bg-gray-200 rounded">Details</button>
   </div>
  </div>
</div>
        `;
        cardcontainer.append(card_div);

    });

};

laodcard();

//which button does not contain data with card,these are showing an error message 
const displayErrorMesage = () => {
    const cardContainer = document.getElementById("card-details");
    cardContainer.innerHTML = `
        <div class="flex flex-col items-center justify-center w-[600px] mt-20 ml-20 mb-10 bg-[#D2DCFD] h-96 rounded-md">
            <img src="image/error.webp" alt="No pets found" class="h-32 w-32 mb-4"/>
            <h1 class="text-black font-bold text-xl">No Information Available</h1>
            <p class="text-sm text-center">It is a long established fact that a reader will be distracted by the readable
             content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a.</p>
        </div>
    `;
};





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



//function fetch for load image while click like button
const loadpetImage = (petId) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
        .then(res => res.json())
        .then(data => showImage(data.petData)) // Updated key
        .catch(error => console.log(error));
};

// function open while like buton onclick
const showImage=(petData)=>{
    const imageContainer=document.getElementById("like-container");
    const image_div=document.createElement("div");
    image_div.classList.add("w-28", "h-10" ,"m-2")
    image_div.innerHTML=`
    <img src="${petData.image}" class="object-cover m-0 p-0 h-28 w-28 rounded"/>
    `;
    imageContainer.appendChild(image_div);

};


//Function open for modal while Adopt button onclick
const AdoptModal = () => {
    const modal = document.getElementById("adopt-details");
    const modalContent = document.getElementById("adopt-modal-content");
    const cardContainer = document.getElementById("card-details"); // Background container

    modalContent.innerHTML = `
    <div class="flex flex-col items-center justify-center w-[600px]  bg-white h-96 rounded-md">
            
            <h1 class="text-black font-bold text-xl">Congratulations</h1>
            <p class="text-sm text-center">Addoption process is start for your pets</p>
             <p class="text-lg font-bold mt-4"><span id="countdown">3</span></p>
        </div>
    `;
    modal.style.display = "block"; 
    cardContainer.classList.add("blur-background");

    let countdown = 3;
    const countdownElement = document.getElementById("countdown");

    // Countdown timer
    const interval = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;

        if (countdown === 0) {
            clearInterval(interval);
        }
    }, 1000);

    // Auto-close after 3 seconds
    setTimeout(() => {
        modal.style.display = "none";
        cardContainer.classList.remove("blur-background");
    }, 3000);
};
















