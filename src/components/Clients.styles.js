import styled from "styled-components";

export const ClientsWrapper = styled.div`
  display: flex;
  width: 1200px;
  flex-direction: column;
  background-color: #fff;
  font-family: "Work Sans";
  box-sizing: border-box; 
`;

export const Header = styled.div`
  display: flex;
  margin: 20px 5px;
`;

export const Title = styled.div`
  margin: 0 20px 0 0;
  font-size: 21px;
  display: flex;
  align-items: center;
`;

export const CreateButton = styled.div`
  padding: 8px 16px 8px 12px;
  font-size: 14px;
  cursor: pointer;
  color: #0a0b0b;
  border: 1px dashed #c8cacb;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
`;

export const ClientList = styled.div`
  display: grid;
  grid-row-gap: 12px;
`;

export const PlusIcon = styled.i`
  font-weight: 300;
  margin: 0px 10px;
`;
