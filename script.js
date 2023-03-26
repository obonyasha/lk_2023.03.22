let p1 = new Promise(function(resolve, reject) {
    let n = Math.random();
    if(n>0.5){
        resolve("Хлеб был куплен");
    } else {
        reject("Проблемки с хлебушком");
    }
});

let p2 = new Promise(function(resolve, reject){
    let n = Math.random();
    if(n>0.2){
        resolve("Хлеб нарезан");
    } else {
        reject("Что-то пошло не так");
    }
})

p1.then(function(result) {
    console.log(result);
    return p2;
})
.then(function(result2){
    console.log(result2);
})
.catch(function(err){
    console.warn(err)
})

