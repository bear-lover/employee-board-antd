const { faker } = require('@faker-js/faker');
const { writeFileSync } = require('fs');
let data = [];

const repeat = (func, times) => {
  func();
  times && --times && repeat(func, times);
}

repeat( () => {
  const sex = faker.name.sexType();
  const firstName = faker.name.firstName(sex);
  const lastName = faker.name.lastName();
  const email = faker.helpers.unique(faker.internet.email, [
    firstName,
    lastName,
  ]);
  data.push({
    key: faker.datatype.uuid(), 
    firstName,
    lastName,
    title: faker.name.jobTitle(), 
    email,
    phone: faker.phone.number(),
    organization: faker.name.jobArea(),
    department: faker.commerce.department(),
    address: faker.address.streetAddress() + faker.address.cityName(),
    avatar: faker.image.avatar(),
  });
}, 300);

writeFileSync('data.json', JSON.stringify(data));
