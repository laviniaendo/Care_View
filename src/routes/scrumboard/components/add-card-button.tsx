import type { FC, PropsWithChildren } from "react";

import { PlusSquareOutlined } from "@ant-design/icons";
import { Button } from "antd";

import { Text } from "@/components";

interface Props {
  onClick: () => void;
}

export const KanbanAddCardButton: FC<PropsWithChildren<Props>> = ({
  children,
  onClick,
}) => {
  return (
    <Button
      size="large"
      // @ts-expect-error Ant Design Icon's v5.0.1 has an issue with @types/react@^18.2.66
      icon={<PlusSquareOutlined className="md" />}
      style={{
        margin: "16px",
        backgroundColor: "white",
      }}
      onClick={onClick}
    >
      {children ?? (
        <Text size="md" type="secondary">
          Adicione novo card
        </Text>
      )}
    </Button>
  );
};
