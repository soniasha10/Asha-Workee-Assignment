import React, { useState } from "react";
import Avatar from "boring-avatars";
import {
  ClientRow,
  ClientDetail,
  Name,
  ProfileIcon,
  EditIcon,
  NewClient,
} from "./Client.styles";
import DialogBox from "./DialogBox";
import { translations } from "../constants/constants";

const Client = (props) => {
  const { client, isMobileView } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [dialogType, setDialogType] = useState("");

  const toggleDialog = (dialogType) => {
    setIsOpen(!isOpen);
    setIsHovered(false);
    setDialogType(dialogType);
  };

  const getSessionText = (sessions) => {
    if (sessions === 1) {
      return `${sessions} ${translations.text_session_single}`;
    } else if (sessions > 1) {
      return `${sessions} ${translations.text_session_multi}`;
    } else {
      return (
        <NewClient onClick={() => toggleDialog("New")}>
          {translations.button_new}
        </NewClient>
      );
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <ClientRow onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ClientDetail>
        <Name>
          <ProfileIcon>
            <Avatar
              size={35}
              square={true}
              name={client.firstName}
              variant="bauhaus"
            />
          </ProfileIcon>
          {client.firstName} {client.lastName}
        </Name>
      </ClientDetail>
      <ClientDetail>{client.email}</ClientDetail>
      <ClientDetail isSession={true}>
        {getSessionText(client.sessions)}{" "}
      </ClientDetail>
      <ClientDetail>
        {(isHovered || isMobileView) && (
          <EditIcon
            className="fas fa-edit"
            onClick={() => toggleDialog("Edit")}
          ></EditIcon>
        )}
      </ClientDetail>
      {isOpen && (
        <DialogBox
          toggleDialog={toggleDialog}
          isOpen={isOpen}
          dialogType={dialogType}
        />
      )}
    </ClientRow>
  );
};

export default Client;
