const categoryRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryRef.length}`);


for (let i = 0; i < categoryRef.length; i += 1) {
    console.log(`Category: ${categoryRef[i].querySelector("h2").textContent}`);
    console.log(`Elements: ${categoryRef[i].querySelectorAll('li').length}`);
    
}

