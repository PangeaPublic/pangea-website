import { BLOCKS, Block, Inline } from "@contentful/rich-text-types";

import ContentImage from "./ContentImage";

import type { ReactElement } from "react";

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => (
      <ContentImage src={node.data.target.fields.file.url} />
    ),
  },
  renderText: (text: string) => {
    return text
      .split("\n")
      .reduce(
        (
          children: (string | false | ReactElement)[],
          textSegment: string,
          index: number
        ) => {
          return [...children, index > 0 && <br key={index} />, textSegment];
        },
        []
      );
  },
};

export { renderOptions };
