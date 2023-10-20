import React, { useState } from "react";

export const TextXpander = () => {
  return (
    <div>
      <TextBlock>
        Note that the development build is not optimized. To create a production
        build, use npm run build.Note that the development build is not
        optimized. To create a production build, use npm run build.Note that the
        development build is not optimized. To create a production build, use
        npm run build.
      </TextBlock>
      <TextBlock
        collapseNumWords={20}
        expanButtonText={"Show Text"}
        collapseButtonText={"Collapse Text"}
        buttonColor={"red"}
      >
        Note that the development build is not optimized. To create a production
        build, use npm run build.Note that the development build is not
        optimized. To create a production build, use npm run build.Note that the
        development build is not optimized. To create a production build, use
        npm run build.
      </TextBlock>
      <TextBlock expanded={true}>
        Note that the development build is not optimized. To create a production
        build, use npm run build.Note that the development build is not
        optimized. To create a production build, use npm run build.Note that the
        development build is not optimized. To create a production build, use
        npm run build.
      </TextBlock>
    </div>
  );
};

const TextBlock = ({
  expanded,
  children,
  collapseNumWords = 20,
  expanButtonText = "Show More",
  collapseButtonText = "Collapse Text",
  buttonColor,
}) => {
  const [isExpended, setIsExpended] = useState(expanded);
  const displayText = isExpended
    ? children
    : children.split(" ").slice(0, collapseNumWords).join(" ") + "...";
  return (
    <div style={{ borderBottom: "2px solid red" }}>
      <span>{displayText}</span>
      <button onClick={() => setIsExpended((ex) => !ex)}>
        {isExpended ? collapseButtonText : expanButtonText}
      </button>
    </div>
  );
};
