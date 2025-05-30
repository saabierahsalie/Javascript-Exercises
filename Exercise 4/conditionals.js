let examOutcome="";
// TODO: Create a variable called score and give it a value between 0 and 100
let score = 77 ; 
// TODO: Create a variable called passingGrade and set it to 60
let passingGrade = 60;
// TODO: Write an if statement to check if score is greater than or equal to passingGrade
if (score >= passingGrade && score < 100) {
    examOutcome="You passed the exam!"
}
// TODO: Add an else statement for when the score is below passingGrade
else {
    examOutcome="You failed the exam!"
}
// TODO: Add another condition to check if the score is perfect (100)
if (score === 100) {
   examOutcome= "Perfect score!"
}
// TODO: Print "Passed" or "Failed" based on the score
console.log(examOutcome);
