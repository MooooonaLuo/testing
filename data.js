s
var data = [
  {"image" : "Chinese Pepper Steak.jpg", "title" : "Chinese pepper steak", "ingredient" : ["beef","tomato", "green pepper","Knife", "Stove", "Fry Pan"], "directions" : ["Slice the steak into 1/2-inch thick slices across the grain.", "Whisk together soy sauce, sugar, cornstarch, and ginger in a bowl until the sugar has dissolved and the mixture is smooth. Place the steak slices into the marinade, and stir until well-coated.", "Heat 1 tablespoon of vegetable oil in a wok or large skillet over medium-high heat, and place 1/3 of the steak strips into the hot oil. Cook and stir until the beef is well-browned, about 3 minutes, and remove the beef from the wok to a bowl. Repeat twice more, with the remaining beef, and set the cooked beef aside.", "Return all the cooked beef to the hot wok, and stir in the onion. Toss the beef and onion together until the onion begins to soften, about 2 minutes, then stir in the green pepper. Cook and stir the mixture until the pepper has turned bright green and started to become tender, about 2 minutes, then add the tomatoes, stir everything together, and serve."], "nutrition": "Per Serving: 312 calories; 15.4 g fat; 17 g carbohydrates; 26.1 g protein; 69 mg cholesterol; 972 mg sodium."},
  {"image" : "Keto Shrimp Scampi with Broccoli Noodles.jpg", "title" : "Keto Shrimp Scampi with Broccoli Noodles", "ingredient" : ["broccoli", "shrimp", "wine", "lemon", "Knife", "Stove", "Fry Pan"], "directions" : ["Cut off broccoli florets and save for another use. Cut woody ends off the stems. Shave large knots off the stems using a vegetable peeler so that they are as uniform as possible. Cut into noodles using the smallest blade on a spiralizer.", "Heat 1 tablespoon olive oil in a large skillet over medium-high heat. Add broccoli noodles, salt, and pepper; toss for 3 minutes. Remove from heat and set aside.", "Add wine, lemon juice, butter, basil, chives, and red pepper to the skillet. Whisk over medium heat for 3 minutes. Return shrimp to the skillet and toss to coat.", "Spoon broccoli noodles into 4 serving bowls. Top with shrimp mixture."], "nutrition" : "Per Serving: 267 calories; 14.2 g fat; 12.8 g carbohydrates; 23.5 g protein; 188 mg cholesterol; 334 mg sodium."},
  {"image" : "Authentic German Potato Salad.jpg", "title" : "Authentic German Potato Salad", "ingredient" : ["potatoes", "bacon", "onion", "Stove", "Pot"], "directions" : ["Place the potatoes into a pot, and fill with enough water to cover. Bring to a boil, and cook for about 10 minutes, or until easily pierced with a fork. Drain, and set aside to cool.", "Place the bacon in a large deep skillet over medium-high heat. Fry until browned and crisp, turning as needed. Remove from the pan and set aside.", "Add onion to the bacon grease, and cook over medium heat until browned. Add the vinegar, water, sugar, salt and pepper to the pan. Bring to a boil, then add the potatoes and parsley. Crumble in half of the bacon. Heat through, then transfer to a serving dish. Crumble the remaining bacon over the top, and serve warm."], "nutrition" : "Per Serving: 183 calories; 3.9 g fat; 32.2 g carbohydrates; 5.4 g protein; 10 mg cholesterol; 796 mg sodium."},
  {"image" : "Szechwan Shrimp.jpg", "title" : "Szechwan Shrimp", "ingredient": ["red pepper", "green onion", "shrimp", "Stove"], "directions" : ["In a bowl, stir together water, ketchup, soy sauce, cornstarch, honey, crushed red pepper, and ground ginger. Set aside.", "Heat oil in a large skillet over medium-high heat. Stir in green onions and garlic; cook 30 seconds. Stir in shrimp, and toss to coat with oil. Stir in sauce. Cook and stir until sauce is bubbly and thickened."], "nutrition" : "Per Serving: 142 calories; 4.4 g fat; 6.7 g carbohydrates; 18.3 g protein; 164 mg cholesterol; 500 mg sodium."},
  {"image" : "Roasted Brussels Sprouts.jpg", "title" : "Roasted Brussels Sprouts", "ingredient" : ["Brussels sprout", "Oven"], "directions" : ["Preheat oven to 400 degrees F (205 degrees C).", "Place trimmed Brussels sprouts, olive oil, kosher salt, and pepper in a large resealable plastic bag. Seal tightly, and shake to coat. Pour onto a baking sheet, and place on center oven rack.", "Roast in the preheated oven for 30 to 45 minutes, shaking pan every 5 to 7 minutes for even browning. Reduce heat when necessary to prevent burning. Brussels sprouts should be darkest brown, almost black, when done. Adjust seasoning with kosher salt, if necessary. Serve immediately."], "nutrition" : "Per Serving: 104 calories; 7.3 g fat; 10 g carbohydrates; 2.9 g protein; 0 mg cholesterol; 344 mg sodium." },
  {"image" : "Simple Roasted Butternut Squash.jpg", "title" : "Simple Roasted Butternut Squash", "ingredient" : ["butternut", "black pepper", "Oven"], "directions" : ["Preheat oven to 400 degrees F (200 degrees C).", "Toss butternut squash with olive oil and garlic in a large bowl. Season with salt and black pepper. Arrange coated squash on a baking sheet.", "Roast in the preheated oven until squash is tender and lightly browned, 25 to 30 minutes."], "nutrition" : "Per Serving: 177 calories; 7 g fat; 30.3 g carbohydrates; 2.6 g protein; 0 mg cholesterol; 11 mg sodium."},
  {"image" : "Beer Lime Grilled Chicken.jpg", "title" : "Beer Lime Grilled Chicken", "ingredient" : ["lime" , "beer", "cilantro", "pepper", "chicken breast", "Oven"], "directions" : ["In a bowl, mix the lime juice, beer, honey, garlic, cilantro, and salt and pepper until the honey dissolves. Pour the mixture over the chicken, cover and marinate for 30 minutes.", "Preheat an outdoor grill for medium heat and lightly oil grate.", "Remove chicken from marinade and shake off excess; discard remaining marinade. Grill chicken until tender and juices run clear, about 7 minutes per side."], "nutrition" : "Per Serving: 182 calories; 2.9 g fat; 7 g carbohydrates; 25.2 g protein; 67 mg cholesterol; 63 mg sodium."},
  {"image" : "Zuchini Boats on the Grill.jpg", "title" : "Zucchini Boats on the Grill", "ingredient" : ["zucchini", "white bread", "bacon", "olive", "jalapeno", "onion", "tomato", "Knife", "Stove", "Pot"], "directions" : ["Prepare the grill for indirect heat.", "Place the zucchini in a pot with enough water to cover. Bring to a boil, and cook 5 minutes. Drain, cool, and cut in half lengthwise. Scoop out the pulp to about 1/4 inch from the skin. Chop pulp.", "In a bowl, mix the zucchini pulp, bread pieces, bacon bits, olives, jalapeno, green chile peppers, onion, tomato, and Cheddar cheese. Season with basil, seasoned salt, and pepper.", "Stuff the zucchini halves with the pulp mixture. Seal each stuffed half in aluminum foil.", "Place foil packets on the prepared grill over indirect heat. Cook 15 to 20 minutes, until tender."], "nutrition" : "Per Serving: 120 calories; 6.3 g fat; 9 g carbohydrates; 8.2 g protein; 18 mg cholesterol; 502 mg sodium."},
  {"image" : "Braised Balsamic Chicken.jpg", "title" : "Braised Balsamic Chicken", "ingredient" : ["chicken breast", "onion", "tomato", "oregano", "Stove", "Pot"], "directions" : ["Season both sides of chicken breasts with garlic salt and pepper.", "Heat olive oil in a skillet over medium heat; cook seasoned chicken breasts until chicken is browned, 3 to 4 minutes per side. Add onion; cook and stir until onion is browned, 3 to 4 minutes.", "Pour diced tomatoes and balsamic vinegar over chicken; season with basil, oregano, rosemary and thyme. Simmer until chicken is no longer pink and the juices run clear, about 15 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C)."], "nutrition" : "Per Serving: 196 calories; 7 g fat; 7.6 g carbohydrates; 23.8 g protein; 61 mg cholesterol; 511 mg sodium."},
  {"image" : "Fluffy French Toast.jpg", "title" : "Fluffy French Toast", "ingredient" : ["egg", "bread", "cinnamon", "milk", "Stove", "Fry Pan"], "directions" : ["Measure flour into a large mixing bowl. Slowly whisk in the milk. Whisk in the salt, eggs, cinnamon, vanilla extract and sugar until smooth.", "Heat a lightly oiled griddle or frying pan over medium heat.", "Soak bread slices in mixture until saturated. Cook bread on each side until golden brown. Serve hot."], "nutrition" : "Per Serving: 123 calories; 2.7 g fat; 19.4 g carbohydrates; 4.8 g protein; 48 mg cholesterol; 230 mg sodium."},
  {"image" : "", "title" : "Roasted Garlic Lemon Broccoli", "ingredient" : ["broccoli", "lemon juice", "Oven", "Knife"], "directions" : ["Preheat the oven to 400 degrees F (200 degrees C).", "In a large bowl, toss broccoli florets with the extra virgin olive oil, sea salt, pepper and garlic. Spread the broccoli out in an even layer on a baking sheet.", "Bake in the preheated oven until florets are tender enough to pierce the stems with a fork, 15 to 20 minutes. Remove and transfer to a serving platter. Squeeze lemon juice liberally over the broccoli before serving for a refreshing, tangy finish."], "nutrition" : "Per Serving: 49 calories; 1.9 g fat; 7 g carbohydrates; 2.9 g protein; 0 mg cholesterol; 326 mg sodium."},
  {"image" : "", "title" : "Baked Asparagus with Balsamic Butter Sauce", "ingredient" : ["asparagus", "cooking spray", "butter", "soy sause", "balsamic vinegar", "Knife", "Oven"], "directions" : ["Preheat oven to 400 degrees F (200 degrees C).", "Arrange the asparagus on a baking sheet. Coat with cooking spray, and season with salt and pepper.", "Bake asparagus 12 minutes in the preheated oven, or until tender.", "Melt the butter in a saucepan over medium heat. Remove from heat, and stir in soy sauce and balsamic vinegar. Pour over the baked asparagus to serve."], "nutrition" : "Per Serving: 77 calories; 5.9 g fat; 4.9 g carbohydrates; 2.8 g protein; 15 mg cholesterol; 308 mg sodium."},
  {"image" : "", "title" : ""}
]
var account = [
  {"username" : "Doggy", "password": "Doggy123"}
]

function searching(input)
{
   var result = new Array();
   for(var x = 0; x < data.length; x++)
   {
     if(data[x].ingredient.length > input.length)
     {
       continue;
     }
     else
     {
       var flag = 0;
       for(var z = 0; z < input.length; z++)
       {
         for(var y = 0; y < data[x].ingredient.length; y++)
         {
           if(data[x].ingredient[y] === input[z])
           {
             flag += 1;
             continue;
           }
         }
       }
       if(flag == data[x].ingredient.length)
       {
         result.push(data[x].title);
         continue;
       }
       else
       {
         continue;
       }
     }
   }
   return result;
 }



 function output_recipe(input)
 {
   var result =[];
   for (var i = 0; i < input.length; i++)
   {
     for (var j = 0; j < data.length; j++)
     {
       if (input[i] == data[j]["title"]) {

         var output = data[j];
         result.push(output);

       }
     }
   }
   return result;
 }




 var in_db = localStorage.getItem("inDatabase");
 var in_tool = localStorage.getItem("toolInput")
 var in_db_array = in_db.split(",");
 var in_tool_array = in_tool.split(",");
 var inputs = new Array();
 for (var p = 0; p < in_db_array.length + in_tool_array.length; p++)
 {
   if(p < in_db_array.length)
   {
     inputs.push(in_db_array[p]);
   }
   else
   {
     inputs.push(in_tool_array[p - in_db_array.length]);
   }
 }
 var search_r = searching(inputs);
 var allRecipe = output_recipe(search_r);

 // function addRecipe(){
 //   var number = JSON.parse(localStorage.getItem("number"));

 //     var li = document.createElement("li");

 //         var a = document.createElement("a");
 //         a.href = "recipe.html";
 //         var inputName = search_r[number];
 //         var t = document.createTextNode(inputName);
 //         var p = document.createElement("p");
 //         li.onclick = function(){
 //           localStorage.recipeChosen = JSON.stringify(inputName);
 //         }
 //         p.appendChild(t);
 //         li.appendChild(a).appendChild(p);


 //         document.getElementById("recipeList").appendChild(li);
 // }

 var test = JSON.parse(localStorage.getItem('favorite'))
 if(test===null){
   var favoriteLi = [];
 } else {
   favoriteLi = test;
 }

 function addFavorite(){
   var count = 0;
   for(var i=0; i<favoriteLi.length; i++){
     if(!(title === favoriteLi[i])){
       count++;
     }
   }
   if(count === favoriteLi.length){
     favoriteLi.push(title);
   }
   localStorage.favorite = JSON.stringify(favoriteLi);
 }
 function removeFavorite(){
   for(var i=0; i<favoriteLi.length; i++){
     if(title === favoriteLi[i]){
       favoriteLi.splice(i, i+1);
     }
   }
   localStorage.favorite = JSON.stringify(favoriteLi);
 }
