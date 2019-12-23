const { getAllPeople } = require('./service');

const myReduce = (list, callback, initialValue) => {
    let finalValue = typeof initialValue !== undefined ? initialValue : this[0];

    for (let index in list) {
        finalValue = callback(finalValue, list[index], list);
    }

    return finalValue;
}

const main = async () => {
    try {
        const { results } = await getAllPeople();

        const heigths = results.map(element => parseInt(element.height));
        console.log('Heigths', heigths);
        //const total = heigths.reduce((previous, next) => previous + next, 0);
        const total = myReduce(heigths, (previous, next) => previous + next, 0);

        console.log('Total', total);

    } catch (error) {
        console.error('Error', error);
    }
}

main();