import { BLOCKS, Block, Inline } from "@contentful/rich-text-types";

import ContentImage from "./ContentImage";

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => (
      <ContentImage src={node.data.target.fields.file.url} />
    ),
  },
};

export { renderOptions };
