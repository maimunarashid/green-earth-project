const loadCategories = ()=>{
    fetch("https://openapi.programming-hero.com/api/categories")
    .then(res=>res.json())
    .then(data=>displayCategories(data.categories));
}



const displayCategories = (categories)=>{
  const allCategory = document.getElementById("all-category");
  allCategory.innerHTML = "";

// Categories heading h1
const heading = document.createElement("h1");
heading.className = "font-bold text-green-900 pb-2";
heading.innerText = "Categories";
allCategory.appendChild(heading);



  categories.forEach(category=>{
      console.log(category);
  
  const categoryContainer = document.createElement("div");
      categoryContainer.innerHTML = `<button id="tree-${category.id}" onclick="loadPlantsByCategories('${category.id}')" class="text-green-900 text-left hover:bg-green-800 hover:text-white hover:rounded-sm p-1">${category.category_name}</button>`;

      allCategory.appendChild(categoryContainer);
    })
}

loadCategories();


const loadAllTrees  = ()=>{
    fetch("https://openapi.programming-hero.com/api/plants")
    .then(res=>res.json())
    .then(data=>displayAllTrees(data.plants))
}


const displayAllTrees = (trees)=>{
    const allTrees = document.getElementById("all-trees");
    allTrees.innerHTML = "";

    trees.forEach(tree=>{
        console.log(tree);
    
    const allTreesContainer = document.createElement("div");
    allTreesContainer.innerHTML = `<div class="p-3 bg-white rounded-[5px] w-full my-3 h-full min-h-[500px] flex flex-col justify-between flex-grow">
  <img class="w-full h-[220px] bg-gray-300 rounded-[5px]" src="${tree.image}">
<div>
  <h1 class="text-[20px] font-bold text-green-800">${tree.name}</h1>
  <p>${tree.description}</p>
</div>
<div class="flex items-center justify-between pb-3 pt-3">
  <h1 class="bg-green-300 pl-4 pr-4 pt-2 pb-2 font-bold text-green-900 rounded-3xl">${tree.category}</h1>
  <p class="font-bold">৳${tree.price}</p>
</div>
<button class="btn bg-green-800 text-center text-white w-[100%] rounded-3xl">Add to Cart</button>
</div>`;

    allTrees.appendChild(allTreesContainer);
    })
}
  
loadAllTrees();



// get plants by category
const loadPlantsByCategories = (id)=>{
  const url = `https://openapi.programming-hero.com/api/category/${id}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayAllTrees(data.plants))
}



const displayPlantsByCategories = (trees)=>{
    const allTrees = document.getElementById(`tree-${category.id}`);
    allTrees.innerHTML = "";

    trees.forEach(tree=>{
        console.log(tree);
    
    const allTreesContainer = document.createElement("div");
    allTreesContainer.innerHTML = `<div class="p-3 bg-white rounded-[5px] w-full my-3 h-full min-h-[500px] flex flex-col justify-between flex-grow">
  <img class="w-full h-[220px] bg-gray-300 rounded-[5px]" src="${tree.image}">
<div>
  <h1 class="text-[20px] font-bold text-green-800">${tree.name}</h1>
  <p>${tree.description}</p>
</div>
<div class="flex items-center justify-between pb-3 pt-3">
  <h1 class="bg-green-300 pl-4 pr-4 pt-2 pb-2 font-bold text-green-900 rounded-3xl">${tree.category}</h1>
  <p class="font-bold">৳${tree.price}</p>
</div>
<button class="btn bg-green-800 text-center text-white w-[100%] rounded-3xl">Add to Cart</button>
</div>`;

    allTrees.appendChild(allTreesContainer);
    })
}