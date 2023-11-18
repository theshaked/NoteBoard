import { CloseOutlined } from "@ant-design/icons";
import IconButton from "./IconButton";
import { ReactNode } from "react";

interface ModalWindowProps {
  children: ReactNode;
  onClose: () => void;
}

const ModalWindow = (props: ModalWindowProps) => {
  return (
    <div
      style={{ background: "rgba(0, 0, 0, 0.5)" }}
      className="fixed z-30 inset-0 flex items-center justify-center"
    >
      <div className="w-1/2 z-40 bg-zinc-800 p-3">
        <IconButton
          onClick={props.onClose}
          className="z-50 relative -top-2 -left-2"
        >
          <CloseOutlined />
        </IconButton>
        {props.children}
      </div>
    </div>
  );
};
``;

export default ModalWindow;
