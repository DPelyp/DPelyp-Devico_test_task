const jsonData= require('./animals.json');


const animals = {
    'chickens' : 2,
    'cows' : 4,
    'pigs' : 4
}

const  test = () => {
    const valuesPigs = Object.values(jsonData)[0];
    const valuesChickens =  Object.values(jsonData)[1];
    const valuesCows = Object.values(jsonData)[2];
    let countPigs = Object.values(animals)[2] * valuesPigs;
    let countChickens = Object.values(animals)[0] * valuesChickens;
    let countCows = Object.values(animals)[1] * valuesCows;
    console.log("Total count of Legs" + ":" + (countChickens +  countCows + countPigs));
}
  
test()