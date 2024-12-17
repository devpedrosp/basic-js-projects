const firstName = prompt("Recruit's first name: ")
const surname = prompt("Recruit's surname: ")
const fieldStudy = prompt("What is the recruit's field of study?")
const yearOfBirth =  prompt("What is the recruit's year of birth?")
const currentYear = 2024

const fullName =  firstName + " " + surname
const age =  currentYear - yearOfBirth

alert(
  "Registered Information:\n" +
  "\nFull Name: " + fullName + 
  "\nField Study: " + fieldStudy + 
  "\nAge: " + age 
)