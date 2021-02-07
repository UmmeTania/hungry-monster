fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
.then(res =>res.json())
.then(data => mealName(data.meals[0]))



const mealName = (meals) => {
    for(let i = 0; i < mealName.length; i++){
        const element = mealName[i];
        console.log(element[i].strMeals)

}
} 
    

