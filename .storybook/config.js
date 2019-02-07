import { configure, addDecorator } from "@storybook/react";
import { initScreenshot } from "storybook-chrome-screenshot";

addDecorator(initScreenshot());
const req = require.context("../src/stories", true, /.js?$/);

configure(() => {
  require("../src/index.css");
  req.keys().forEach(filename => req(filename));
}, module);
