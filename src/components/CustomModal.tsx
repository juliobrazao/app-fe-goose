import { MouseEventHandler, ReactNode, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { AppContext, AppContextProps } from "../contexts/AppContext";

export type CustomModalActionButton = {
  innerText?: string;
  variant: "primary" | "secondary";
  method?: MouseEventHandler<HTMLButtonElement>;
};

interface CustomModalProps {
  title?: string;
  actionButtons?: CustomModalActionButton[];
  children?: ReactNode | string | null;
}

export default function CustomModal({
  title,
  children,
  actionButtons,
}: Partial<CustomModalProps>) {
  const { showModal } = useContext<AppContextProps>(AppContext);

  return (
    <>
      <Modal show={showModal}>
        <Modal.Header>{title}</Modal.Header>

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
