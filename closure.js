function outerFunction() {
    function innerFunction() {
        console.log("This is the inner function"); 
    }
    return innerFunction; 
}

const result = outerFunction(); 
result(); 
// console.log('in the outside', output); 

function counter(owner) {
    let count = 0; 
    function increment() {
        count = count + 1; 
        console.log("value of count", owner, count)
    }
    return increment; 
}
const count1 = counter(); 
// console.log(count1()); 
count1(); 
count1(); 
count1(); 
count1(); 

const rahimCounter = counter('Rahim'); 
const karimCounter = counter("Karim"); 
rahimCounter(); 
rahimCounter(); 
rahimCounter(); 
rahimCounter(); 
karimCounter(); 
karimCounter(); 
karimCounter(); 
rahimCounter(); 