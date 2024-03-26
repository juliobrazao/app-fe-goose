import { MouseEventHandler, ReactNode, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { AppContext, AppContextProps } from "../contexts/AppContext";
import {
  ExclamationCircleFill,
  InfoCircleFill,
  XCircleFill,
} from "react-bootstrap-icons";

export type CustomModalActionButton = {
  innerText?: string;
  variant: "primary" | "secondary";
  method?: MouseEventHandler<HTMLButtonElement>;
};

interface CustomModalProps {
  title?: string;
  iconType?: "warning" | "info" | "danger";
  actionButtons?: CustomModalActionButton[];
  children?: ReactNode | string | null;
}

const iconTypesAndComponents = {
  warning: <ExclamationCircleFill color="yellow" />,
  info: <InfoCircleFill color="blue" />,
  danger: <XCircleFill color="red" />,
};

export default function CustomModal({
  title,
  iconType,
  children,
  actionButtons,
}: Partial<CustomModalProps>) {
  const { showModal } = useContext<AppContextProps>(AppContext);

  return (
    <>
      <Modal show={showModal}>
        <Modal.Header>
          {iconType && iconTypesAndComponents[iconType]}
          &nbsp;&nbsp;
          {title}
        </Modal.Header>

        <Modal.Body>{children}</Modal.Body>

        <Modal.Footer>
          {actionButtons &&
            actionButtons.map((actionButton, index) => (
              <Button
                key={index}
                variant={actionButton.variant}
                onClick={actionButton.method}
              >
                {actionButton.innerText}
              </Button>
            ))}
        </Modal.Footer>
      </Modal>
    </>
  );
}
