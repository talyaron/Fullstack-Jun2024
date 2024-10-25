import express from 'express';
const app = express()
const port = process.env.PORT || 3000

function fizzBuzz(num:number)
{
    let resultArray: string[] = []; 
   
    for (let i = 1; i <= num; i++) {
        let currentResult = ""; // To store the current result for each number

        if (i % 2 === 0 && i % 5 === 0) {
            currentResult = "fizzbuzz"; // Both divisible by 2 and 5
        } else if (i % 2 === 0) {
            currentResult = "fizz"; // Only divisible by 2
        } else if (i % 5 === 0) {
            currentResult = "buzz"; // Only divisible by 5
        } else {
            currentResult = i.toString(); // Neither, so add the number itself
        }

        resultArray.push(currentResult); // Add the current result to the array
    }

    return resultArray.join(" ,"); // Join the array elements with newlines between them

}


//event handler of get method
app.get('/', (req, res) => {
    console.log("hello world");
    res.send(fizzBuzz(100))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
