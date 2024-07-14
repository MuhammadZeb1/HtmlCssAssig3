// // TABLE PROBLEM
// var input = prompt("user input")
// for(var i = 1; i < 11; i++){
//     var result = input * i;
//     console.log(`${input} * ${i} = ${result}`)  
// }

// user se 5 number

// const arrays= []

// for(var i = 0; i < 5; i++)
//     {
//         var userInput = +prompt("userinput")
//          arrays.push(userInput)
//         console.log(arrays[i])
//     }
//     var sum = 0
//     for(var i = 0;i < arrays.length; i++){
//         sum +=arrays[i]
//     }
//     console.log(`sum of the array ${sum}`)
    
    
    

   


// FIND BIG Number
// var arrays = []

// for(let i = 0; i < 5; i++)
// {
//     var userInput = +prompt("userinput")
//              arrays.push(userInput)
//              console.log(arrays[i])
// }
// var max = arrays[0]
// for(let i = 1;i < arrays.length; i++)
// {
//    if(max < arrays[i])
//    {
//     max = arrays[i]
//    }
// }
//   console.log(`max ${max}`)

// REVERSE THE STRING
var userString = prompt("user string")
var reverseString = " ";
for(var i = userString.length-1 ; i >= 0; i--){
    reverseString = reverseString + userString[i]
}
alert(reverseString,userString)