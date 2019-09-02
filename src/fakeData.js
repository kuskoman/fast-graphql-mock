const faker = require('faker')

const fakeData = {
    String: () => faker.lorem.words(5),
    Date: () => faker.date.future(),
    DateTime: () => faker.date.future(),
    PostalCode: () => faker.address.zipCode(),
    PhoneNumber: () => faker.phone.phoneNumber(),
    URL: () => faker.internet.url(),
    EmailAdress: () => faker.internet.exampleEmail()
}

module.exports = fakeData