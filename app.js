
const searchMeals = async() =>{
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`
    const res = await fetch(url);
    const data = await res.json(); 
    displayMeals(data.meals);
    
    
}
const displayMeals = foods =>{
    const foodContainer = document.getElementById('meal-container');
    foodContainer.innerHTML = '';
    foods.forEach(food => {
        const foodDiv = document.createElement('div');
        foodDiv.className = 'single-result row align-items-center my-3 p-3';
        foodDiv.innerHTML = `
        <div class="col-md-9">
            <h3>${food.strMeal}</h3>
            <p>Food Category: <span>${food.strCategory}</span></p>
            <img  onclick="getInfo('${food.strArea}','${food.strMeal}')" src="${food.strMealThumb}"  alt="">
        </div>
        `;
        foodContainer.appendChild(foodDiv);
    });
}

const getInfo = (strArea, strMeal) => {
    const mealArea = document.getElementById("meal-area");
    mealArea.style.display = "none";
    const informationArea = document.getElementById("information-area");
    informationArea.style.display = "block";
    displayItem(strArea, strMeal);

}

const displayItem = (strArea,strMeal)=> {
    
    const itemDiv = document.getElementById('meal-name');
    itemDiv.innerText = strMeal;
}
