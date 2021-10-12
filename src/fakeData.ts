import faker from "faker";
import * as s from "graphql-scalars";

const baseFakeData = {
  String: (): string => faker.lorem.words(5),
  Date: (): Date => faker.date.future(),
  DateTime: (): Date => faker.date.future(),
  PostalCode: (): string => faker.address.zipCode(),
  PhoneNumber: (): string => faker.phone.phoneNumber(),
  URL: (): string => faker.internet.url(),
  EmailAdress: (): string => faker.internet.exampleEmail(),
};

const customScalarsFakeData = {
  BigInt: s.BigIntMock,
  Byte: s.ByteMock,
  Currency: s.CurrencyMock,
  DateTime: s.DateTimeMock,
  Date: s.DateMock,
  Duration: s.DurationMock,
  EmailAddress: s.EmailAddressMock,
  HexColorCode: s.HexColorCodeMock,
  Haxadecimal: s.HexadecimalMock,
  HSL: s.HSLMock,
  HSLA: s.HSLAMock,
  IPv4: s.IPv4Mock,
  IPv6: s.IPv6Mock,
  IBAN: s.IBANMock,
  ISBN: s.ISBNMock,
  JSONObject: s.JSONObjectMock,
  JSON: s.JSONMock,
  JWT: s.JWTMock,
  Latitude: s.LatitudeMock,
  LocalDate: s.LocalDateMock,
  LocalEndTime: s.LocalEndTimeMock,
  LocalTime: s.LocalTimeMock,
  Longitude: s.LongitudeMock,
  MAC: s.MACMock,
  NegativeFloat: s.NegativeFloatMock,
};

export default { ...baseFakeData, ...customScalarsFakeData };
