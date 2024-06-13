const JohnyDeep = {
    height: 180,
    weight: 75,
    name: 'Johny',
    surname: 'Deep',
    hobbies: ['cricket', 'polo', 'alcohol'],
    films: {
        2000: ['Pirates', 'Edvard'],
        2001: ['Charlie', 'Pirates-2']
    },
    singing: function() {
        console.log("I am singing")
    }
}

const RickyMartin20070515Berlin = {
    location: {
        lng: 1535689,
        ltd: 4689321
    },
    duration: 4,
    visitors: 150000,
}

const arrExample = [1, 2, 3];
console.log(arrExample[0]);
const arrExample2 = {
    0: 1,
    1: 2,
    2: 3,
}

console.log(arrExample2[0]);

const lngVar = 'lng'
console.log(JohnyDeep.height);
console.log(JohnyDeep['height']);
console.log(RickyMartin20070515Berlin['location'][lngVar]);

JohnyDeep['married'] = true;
delete JohnyDeep['married'];

console.log(Object.keys(JohnyDeep));
console.log(Object.values(JohnyDeep));
console.log(Object.entries(JohnyDeep));
console.table(Object.entries(JohnyDeep));

if('height' in JohnyDeep) {
    console.log(JohnyDeep.height);
}

// spread
const newJohny = {
    married: true,
    ...JohnyDeep,
}