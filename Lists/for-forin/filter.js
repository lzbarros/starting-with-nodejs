const { getAllPeople } = require('./service');

const myFilter = (list, callback) => {
    const finalValue = [];

    for (let index in list) {
        const result = callback(list[index], index, list);

        if (!result) continue;
        finalValue.push(list[index]);
    }
    return finalValue;
}

const main = async () => {
    try {
        const { results } = await getAllPeople();
        //const filteredNames = results.filter(element => element.name.toLowerCase().indexOf('lars') !== -1);
        const filteredNames = myFilter(results, element => element.name.toLowerCase().indexOf('lars') !== -1);
        const mappedNames = filteredNames.map(element => element.name);

        console.log('Result', mappedNames);

    } catch (error) {
        console.error('Error', error);
    }
};

main();