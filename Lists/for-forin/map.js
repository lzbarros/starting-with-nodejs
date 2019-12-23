const service = require('./service');

const myMap = (list, callback) => {
    const finalValue = [];
    for (let index in list) {
        const result = callback(list[index], index, list);
        finalValue.push(result);
    }

    return finalValue;
}

const main = async () => {
    try {
        const { results } = await service.getAllPeople();
        let names = [];

        console.time('foreach');
        results.forEach(element => {
            names.push(element.name);
        });
        console.timeEnd('foreach');

        console.time('formap');
        //names = results.map(element => element.name);
        names = myMap(results, element => element.name);       
        console.timeEnd('formap');

        console.log('Result', names);
    } catch(error) {
        console.error('Error', error);
    }
}

main();