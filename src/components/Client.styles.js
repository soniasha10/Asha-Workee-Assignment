import styled from "styled-components";

export const Name = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 16px;
  align-items: center;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const ProfileIcon = styled.div`
  border-radius: 4px;
  margin: 12px 16px 12px 24px;
  min-width: 32px;
  height: 32px;
  overflow: hidden;
  @media (max-width: 600px) {
    margin: 5px;
  }
`;

export const EditIcon = styled.i`
  color: #9da0a2;
  &:hover {
    color: #0a0b0b;
  }
`;

export const ClientRow = styled.div`
  display: grid;
  grid-column-gap: 5px;
  grid-template-columns: 40% minMax(30%, 40%) 18% minMax(40px, 10%);
  background-color: #f4f5f4;
  border-radius: 2px;
  height: 56px;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #ffffff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25);
  }
  @media (max-width: 600px) {
    height: auto;
    min-height: 56px;
  }
`;

export const ClientDetail = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  word-break: break-word;
  ${(props) =>
    props.isSession &&
    ` word-break: break-word;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;`}
  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

export const NewClient = styled.div`
  color: #00b278;
  font-family: "SF UI Display";
  border: 1px solid #00b278;
  border-radius: 4px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
`;
