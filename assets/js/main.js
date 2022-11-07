// 1_1

for (let i = 1; i <= 10; i += 1) {
    console.log("Hello World: " + i)
}

// 1_2
let numArray = [];

for (let i = 0; i <= 10; i += 1) {
    numArray.push(i);
    console.log(numArray);
}

// 1_4
let namesArray = ["Freddy", "Steffen", "Finn", "Julia", "Franzi", "Christian", "Sergio"]

for (let i = 0; i < namesArray.length; i += 1) {
    console.log(i, namesArray[i])
}

// let 1_6
let retArray = [];

for (let i = 1; i <= 100; i += 1) {
    retArray.push(`image_${i}.jpg`)

}
console.log(retArray)

// 1_7

let numberDoWhile = 0;
do {
    numberDoWhile += 1;
    console.log(`The number is ${numberDoWhile}`)
} while (numberDoWhile < 5)

// 1_8
let doubleDoWhile = 0;
do {
    doubleDoWhile += 2;
    console.log(`${doubleDoWhile}`)
} while (doubleDoWhile < 18)

// 1_9
let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung']
function printWords() {
    const input = Number(document.getElementById("inputNumber").value);
    const output = document.getElementById("outputWords");
    for (let word of words) {
        if (input === word.length) {
            output.innerHTML += (word + "<br>")
        }
    }

    //    const newWords = document.getElementById("newWords").value;
    // const updatedOutput = words.push(newWords);
    // output.innerHTML += updatedOutput;

}