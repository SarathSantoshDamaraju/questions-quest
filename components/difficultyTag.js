import { IconTriangle } from "@tabler/icons";
import { Tooltip } from "@mantine/core";
import { useMemo } from "react";

export default function DifficultyTag(props) {
  const { difficulty } = props;
  const difficultyType = difficulty?.[0] ?? "easy";

  const details = useMemo(() => {
    if (difficultyType === "medium") {
      return { text: "MEDIUM", color: "#fcbf49" };
    } else if (difficultyType === "hard") {
      return { text: "HARD", color: "#f77f00" };
    } else if (difficultyType === "advanced") {
      return { text: "ADVANCED", color: "#d62828" };
    }

    return { text: "EASY", color: "#3bceac" };
  }, [difficulty]);

  return (
    <Tooltip label={details?.text} withArrow transition="pop" position="top">
      <div style={{ height: "24px", width: "24px" }}>
        <IconTriangle color={details.color} height={24} />
      </div>
    </Tooltip>
  );
}

DifficultyTag.defaultProps = {
  difficulty: 0,
};
