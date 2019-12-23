const service = require('./service');

const main = async () => {
    try {
        const peoples = await service.getAllPeople();
        const names = [];

        console.time('for');
        for (let i = 0; i < peoples.results; i++) {
            names.push(peoples.results[i].name);
        }
        console.timeEnd('for');

        console.time('forin');
        for (let i in peoples.results) {
            names.push(peoples.results[i].name);
        }
        console.timeEnd('forin');

        console.time('forof');
        for (let people of peoples.results) {
            names.push(people.name);
        }
        console.timeEnd('forof');

        console.log('Result', names);        
    } catch (error) {
        console.error('Error', error);
    }
}

main();