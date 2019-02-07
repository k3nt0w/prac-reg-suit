import { configure } from "@storybook/react";

const req = require.context("../src/stories", true, /.js?$/);
function loadStories() {
  require("../src/index.css");
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
