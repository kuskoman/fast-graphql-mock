import faker from "faker";

const fakeData = {
  String: (): string => faker.lorem.words(5),
  Date: (): Date => faker.date.future(),
  DateTime: (): Date => faker.date.future(),
  PostalCode: (): string => faker.address.zipCode(),
  PhoneNumber: (): string => faker.phone.phoneNumber(),
  URL: (): string => faker.internet.url(),
  EmailAdress: (): string => faker.internet.exampleEmail(),
};

export default fakeData;
