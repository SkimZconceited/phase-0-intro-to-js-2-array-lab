const cats = ["Milo", "Otis", "Garfield"];
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });


  function destructivelyAppendCat(name) {
    cats.push(name);
}
destructivelyAppendCat('Ralph');
console.log(cats);


function destructivelyPrependCat(name) {
    cats.unshift(name);
}

destructivelyPrependCat('Bob');
console.log(cats);


function destructivelyRemoveLastCat() {
    cats.pop();
}
destructivelyRemoveLastCat();
console.log(cats);


function destructivelyRemoveFirstCat() {
    cats.shift();
}
destructivelyRemoveFirstCat();
console.log(cats);


function appendCat(name) {
    const copyOfCats = [...cats, name];
    return copyOfCats;
}

appendCat('Broom');
console.log(cats);


function prependCat(name) {
    const copyOfCats = [name, ...cats];
    return copyOfCats;
}
console.log(prependCat('Arnold'));
console.log(cats);


function removeLastCat() {
    return cats.slice(0, -1);
}
removeLastCat();
console.log(cats);


function removeFirstCat() {
    return cats.slice(1);
}
removeFirstCat();
console.log(cats);