import styled from "styled-components";

export const dialogStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "10px",
    outline: "none",
    padding: "20px",
    maxWidth: "600px",
    minWidth: "300px",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
};

export const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  background-color: gray;
  opacity: 0.4;
  width: 100%;
  height: 100%;
`;

export const CloseButton = styled.i`
  font-weight: 300;
  position: fixed;
  right: 20px;
  top: 12px;
  font-size: 28px;
  cursor: pointer;
  &:hover {
    color: #555;
  }
`;

export const Body = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div``;

export const TextInputField = styled.input`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  transition: 0.3s;
  border: 1px solid #e7e8e7;
  width: 80%;
`;

export const TextAreaField = styled.textarea`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  transition: 0.3s;
  border: 1px solid #e7e8e7;
  width: 80%;
`;

export const DateTime = styled.i``;

export const Footer = styled.div`
  display: flex;
  margin: 30px 0;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  width: calc(100% - 40px);
`;

export const Button = styled.div`
  border-radius: 8px;
  letter-spacing: inherit;
  font-weight: 300;
  transition: all 0.3s;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  margin: 0 10px;
  border: 1px solid #00b278;
  font-family: "SF UI Display";
  background-color: ${(props) => (props.primary ? "#00b278" : "#fff")};
  cursor: pointer;
  &:hover {
    background-color: #35cc9a;
  }
`;
