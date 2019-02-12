import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../component/Button";
import "../component/Button.css";

 storiesOf("Button", module)
  .add("normal", () => (
    <Button
      name="2"
      orange={false}
      wide={false}
      clickHandler={() => console.log("click handler")}
    />
  ))
  .add("orange", () => (
    <Button
      name="="
      orange={true}
      wide={false}
      clickHandler={() => console.log("click handler")}
    />
  ))
  .add("wide", () => (
    <Button
      name="0"
      orange={false}
      wide={true}
      clickHandler={() => console.log("click handler")}
    />
  ));