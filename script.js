// LOOPS EXERCISES

// var i = 1;

// while(i < 20){
//   console.log("Hello, world");
//   i++;
// }

// var moviesArray = ["Casablanca", "Star Wars", "Singing in the Rain", "The Wizard of Oz", "Die Hard"];

// var i = 0;

// while(i < moviesArray.length){
//   console.log(moviesArray[i]);
//   i++;
// }

//exercise 1
// let i =1;
// while (i<100) {
//     console.log("TWEET TWEET");
//     i++
// }

//exercise 2
// var bird = 1;

// while(bird <= 100){
//     console.log("TWEET TWEET!!!", bird);
//     bird++;
// }

// exercise 3
// let favoriteFoods = ["meatball","stromboli","zebra cakes","mammal milk","fondu"];

// for(i=0; i<favoriteFoods.length; i++){
//     console.log(favoriteFoods[i])

// }

// exercise 4
// var cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"]

//  for(i=0; i<cohortOneStudents.length; i++){
//      console.log(cohortOneStudents[i])
//  }

// exercise 5
// hobbies = ["hiking","swimming","fishing","camping","farming"];

// for(i=0; i<hobbies.length;i++){
//     console.log(`My Name is Fandango i love ${hobbies[i]}`)
// }

// exercise 6
//  hobbies = ["hiking","swimming","fishing","camping","farming"];

//  for(i=0; i<hobbies.length;i++){
//      if (hobbies[i] === "camping"){
//          console.log(`My fave hobbie is ${hobbies[i]}`)
//      }else
//      console.log(`My Name is Fandango i love ${hobbies[i]}`)
//  }

// exercise 7
// var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];

// for (i=0; i<harryPotterTitles.length; i++){
//     console.log(`Harry Potter ${harryPotterTitles[i]}`)
// }

//exercise 8
// var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92];

// Loop through the grades with a for loop
// If the current grade is greater than or equal to 0 and less than or equal to 69, log "You got an F" to the console.
// If it's between 70 and 76, log "You got a D" to the console.
// If it's between 77 and 84, log "You got a C" to the console.
// If it's between 84 and 92, log "You got a B" to the console.
// If it's between 93 and 100, log "You got an A" to the console.

// for (i=0; i<grades.length; i++){
//     // console.log(grades[i])
// if(grades[i]>=0 && grades[i]<= 69){
//     console.log("You Got an F")
// }else if(grades[i]>= 70 && grades[i]<=76){
//     console.log("You Got a D")
// }else if(grades[i]>= 77 && grades[i]<=84){
//     console.log("You Got a C")
// }else if(grades[i]>= 84 && grades[i]<=92){
//     console.log("You Got a B")
// }else if(grades[i]>= 93 && grades[i]<=100){
//         console.log("You Got an A")
// }
// }

//exercise 9
// count by 2
//  for (let i=2; i<=8; i=i+2 ){
//  console.log(i)
//  }

// exercise 10
//  let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"]

// function addExcitement (theWordArray, punctuation, multiply) {
//     let buildMeUp = ""
// for (let i = 0; i<=theWordArray.length; i++)
//  {
//      if((i+1) % 4 === 0){
//         buildMeUp = buildMeUp + " "+ theWordArray[i] + (punctuation.repeat(multiply))
//      }
//    buildMeUp = buildMeUp + " "+ theWordArray[i]

//         console.log(buildMeUp)
//          }
// }
// addExcitement(sentence, " " +"MOOOOOOO", 1)

// exercise 11
// var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]

// Use JavaScript to answer the following questions:
// How many students got A's?
// How many students got B's?
// What was the average percentage grade in the class?

// for (i=0; i<grades.length; i++){
//     console.log(grades[i])
//     if(grades[i]>= 93 && grades[i]<=100){
//                 console.log("You Got an A")
//     }
//    else if(grades[i]>= 84 && grades[i]<=92){
//                console.log("You Got a B")
//    }

// }

// function gradeAverage(){
//     for (i=0; i<grades.length; i++){
//         var avg = (grades[i] / grades.length) * grades.length
//     }
//     console.log(`The Class Grade Average is ${avg}`)
// }
// gradeAverage()

