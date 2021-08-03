import React from "react";
import Modal from "react-modal";
import {
  dialogStyles,
  CloseButton,
  Body,
  Header,
  Footer,
  Button,
} from "./DialogBox.styles";
import { translations } from "../constants/constants";

const DialogBox = ({ toggleDialog, isOpen, dialogType }) => {
  const submitHandler = () => {
    alert(
      "This is Demo. Later, session creation code and validation will come here"
    );
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={toggleDialog} style={dialogStyles}>
      <Header>
        <CloseButton onClick={toggleDialog} className="fas fa-times" />
      </Header>
      <Body>
        <b>{dialogType} &nbsp;</b> Session content will come here
      </Body>
      <Footer>
        <Button onClick={toggleDialog}>{translations.button_cancel}</Button>
        <Button primary={true} onClick={submitHandler}>
          {translations.button_submit}
        </Button>
      </Footer>
    </Modal>
  );
};
export default DialogBox;
