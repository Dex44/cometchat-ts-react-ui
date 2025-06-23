import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  UIKitSettingsBuilder,
  CometChatUIKit,
} from "@cometchat/chat-uikit-react";
import { setupLocalization } from "./CometChat/utils/utils";
import { CometChatProvider } from "./CometChat/context/CometChatContext";
import { COMETCHAT_CONSTANTS } from "./constants/cometchatConstants";

// Initialize UI Kit
const uiKitSettings = new UIKitSettingsBuilder()
  .setAppId(COMETCHAT_CONSTANTS.APP_ID)
  .setRegion(COMETCHAT_CONSTANTS.REGION)
  .setAuthKey(COMETCHAT_CONSTANTS.AUTH_KEY)
  .subscribePresenceForAllUsers()
  .build();

const renderApp = () => {
  const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
  root.render(
    <CometChatProvider>
      <App />
    </CometChatProvider>
  );
};

const initializeApp = async () => {
  try {
    await CometChatUIKit.init(uiKitSettings);
    setupLocalization();

    const user = await CometChatUIKit.getLoggedinUser();
    if (!user) {
      const loggedInUser = await CometChatUIKit.login(COMETCHAT_CONSTANTS.UID);
      console.log("Login Successful:", loggedInUser);
    } else {
      console.log("User already logged in:", user);
    }

    renderApp();
  } catch (error) {
    console.error("Initialization/Login Failed:", error);
  }
};

initializeApp();
