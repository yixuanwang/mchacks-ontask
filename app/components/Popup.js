import React from "react";
import styled from "styled-components";
import { Button, Grid, Input, Popup } from "semantic-ui-react";

const PopupChat = () => {
  return (
    <React.Fragment>
      <Popup
        trigger={
          <Button
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              margin: "2%",
            }}
            color="red"
            content={<i className="fas fa-dragon"></i>}
          />
        }
        content={
          <PopupContainer>
            <iframe
              allow="microphone;"
              width="400"
              height="600"
              src="https://console.dialogflow.com/api-client/demo/embedded/0485cb1f-fe4b-4a9a-ac68-b55ed27a9be5"
            ></iframe>
          </PopupContainer>
        }
        on="click"
        position="top right"
        style={{
          padding: 0,
          borderRadius: "6px",
        }}
      />
    </React.Fragment>
  );
};

export default PopupChat;

const PopupContainer = styled.main`
  position: relative;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: ${(props) => props.theme.styles.borderRadius};
  color: ${(props) => props.theme.colors.textColor};
  max-width: ${(props) => props.theme.styles.maxPopupWidth};
  padding: 20px;
`;
