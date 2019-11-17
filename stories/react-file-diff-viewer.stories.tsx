import * as React from "react";
import { storiesOf } from "@storybook/react";
// import { boolean, select } from "@storybook/addon-knobs";
// import { action } from "@storybook/addon-actions";
import ReactFileDiffViewer from "../src/react-file-diff-viewer";

storiesOf("ReactFileDiffViewer", module).add("Playground", () => {
  // return <div>s</div>
  return (
    <ReactFileDiffViewer
    // onClick={action("click")}
    // kind={select("kind", kind, "primary")}
    // outline={boolean("outline")}
    // scale={select("scale", ["normal", "small", "big"], "normal")}
    />
  );
});
