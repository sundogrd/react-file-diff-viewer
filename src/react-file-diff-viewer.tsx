import * as React from "react";
import { diffLines, formatLines } from "unidiff";
import { parseDiff, Diff, Hunk } from "react-diff-view";
import useInput from "./hooks/use-input";

import "react-diff-view/style/index.css";

const EMPTY_HUNKS = [];

export type ReactFileDiffViewerProps = {};

const ReactFileDiffViewer: React.SFC<ReactFileDiffViewerProps> = ({}) => {
  const oldText = useInput("");
  const newText = useInput("");
  const [{ type, hunks }, setDiff] = React.useState({
    type: "add",
    hunks: null
  });
  const updateDiffText = React.useCallback(() => {
    const diffText = formatLines(diffLines(oldText.value, newText.value), {
      context: 3
    });
    const [diff] = parseDiff(diffText, { nearbySequences: "zip" });
    setDiff(diff);
  }, [oldText.value, newText.value, setDiff]);
  return (
    <div>
      <header className="header">
        <div className="input">
          <textarea
            className="text"
            rows={10}
            placeholder="old text..."
            {...oldText}
          />
          <textarea
            className="text"
            rows={10}
            placeholder="new text..."
            {...newText}
          />
        </div>
        <button className="submit" onClick={updateDiffText}>
          GENERATE DIFF
        </button>
      </header>
      <main>
        <Diff viewType="split" diffType={type} hunks={hunks || EMPTY_HUNKS}>
          {hunks => hunks.map(hunk => <Hunk key={hunk.content} hunk={hunk} />)}
        </Diff>
      </main>
    </div>
  );
};

export default ReactFileDiffViewer;
