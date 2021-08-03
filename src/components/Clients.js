import React from "react";
import {
  ClientsWrapper,
  Header,
  Title,
  CreateButton,
  ClientList,
  PlusIcon,
} from "./Clients.styles";
import { getClientsData } from "../mock/MockData";
import Client from "./Client";
import { isMobileView } from "../utils/utils";
import { translations } from "../constants/constants";

const clientsData = getClientsData();
const isMobile = isMobileView();

const Clients = () => {
  return (
    <ClientsWrapper>
      <Header>
        <Title>{translations.title_contacts}</Title>
        <CreateButton>
          <PlusIcon className="fa fa-plus" aria-hidden="true" />
          {translations.button_createNew}
        </CreateButton>
      </Header>
      <ClientList>
        {clientsData.map((client, index) => {
          return <Client client={client} key={index} isMobileView={isMobile} />;
        })}
      </ClientList>
    </ClientsWrapper>
  );
};

export default Clients;
