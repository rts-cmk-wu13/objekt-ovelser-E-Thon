document.addEventListener("DOMContentLoaded", function () {
  // --- Løs opgaverne herunder ---
  // --- opgave 1 ---
  let cat = {
    name: "Miffy",
    age: 8,
    owner: "Emilie",
    home: "Copenhagen"
  }
  console.log("Name:", cat.name)
  console.log("Age:", cat.age)
  console.log("Owner:", cat.owner)
  console.log("Home:", cat.home)
  
  console.log("Name:", cat["name"])
  console.log("Age:", cat["age"])
  console.log("Owner:", cat["owner"])
  console.log("Home:", cat["home"])

  // --- opgave 2 ---
  let cat2 = {
    names: ["Miffy", "Skattepigen", "Smukkepigen"],
    age2: 8,
    female: true,
    owner2: "Emilie",
    home2: "Copenhagen",
    foods: {
      breakfast: "Wet cats food from VitaCraft",
      dinner: "Pill hidden in treats",
      allDay: "Dry cats food"
    }
  }
  
  cat2.names.forEach((nameAgain) => console.log(`Names:`, nameAgain));
  console.log("Breakfast:", cat2.foods.breakfast)
  console.log("Dinner:", cat2.foods.dinner)
  console.log("Available all day:", cat2.foods.allDay)

}); // ends DOMContentLoaded

