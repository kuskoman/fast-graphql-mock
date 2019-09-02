const faker = require('faker')

const fakeData = {
    Float: () => Math.random() * 100,
    String: () => faker.lorem.words(5)
}

module.exports = fakeData