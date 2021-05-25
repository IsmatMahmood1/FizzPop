console.log ('this is FizzPop');
for (let i=1;i<50;i++){
    if (i%5 === 0 && i%3 ===0)
        console.log('FizzPop')
    else if (i%5 ===0)
        console.log("Fizz");
    else if (i%3 ===0)
        console.log("Pop")
    else if (i%2===0)
        console.log("Hop")
    else
        console.log(i);
    }