async function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() =>
            resolve({
                id: 1,
                name: 'Luiz',
                age: 28,
            }),
            2000
        );
    });
}

async function getAddress(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>
            resolve({
                street: 'From florindas',
                number: 743,
            }),
            2000
        );
    });
}

async function getTelephone(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>
            resolve({
                number: 'From florindas',
                ddd: 743,
            }),
            2000
        );
    });
}

const main = async () => {
    try {
        const user = await getUser();
        //const address = await getAddress(user.id);
        //const telephone = await getTelephone(user.id);

        // it has more performance
        const result = await Promise.all([
            getAddress(user.id),
            getTelephone(user.id)
        ]);

        const address = result[0];
        const telephone = result[1];
        
        console.log(`
            Name: ${user.name}
            Address: ${address.street}, ${address.number}
            Telephone: (${telephone.ddd}) - ${telephone.number}
        `);
    } catch (error) {
        console.error('so bad', error);
    }
};

main();


/* user.then((user) => {
    return getAddress(user.id).then((address) => {
        return {
            user,
            address
        }
    });
}).then((result) => {
    return getTelephone(user.id).then((telephone) => {
        result.telephone = telephone;
        return result;
    });
}).then((result) => {
    console.log(`
        Name: ${result.user.name}
        Address: ${result.address.street}, ${result.address.number}
        Telephone: (${result.telephone.ddd}) - ${result.telephone.number}
    `);
});
*/

/* 
getAddress(user.id, (error1, address) => {
    if (error1) {
        console.log(`Error: ${error}`);
        return;
    }

    getTelephone(user.id, (error2, telephone) => {
        if (error2) {
            console.log(`Error: ${error}`);
            return;
        }

        console.log(`
            Name: ${user.name}
            Address: ${address.street}, ${address.number}
            Telephone: (${telephone.ddd}) - ${telephone.number}
        `);
    }); 
});
*/

