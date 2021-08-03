import faker from "faker";
export const getClientsData = (numberOfClients = 10) => {
  let clientsData = [];

  /* Generate mock clients array of objects */
  for (let i = 0; i < numberOfClients; i++) {
    clientsData.push({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      sessions: Math.floor(Math.random() * 10),
    });
  }
  return clientsData;
};
