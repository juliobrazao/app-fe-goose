import { ReactNode } from "react";

interface ModalProps {
  title?: string;
  buttonTitle?: string | ReactNode;
  children: ReactNode | null;
}

export default function Modal({ title, buttonTitle, children }: ModalProps) {
  return (
    <>
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#genericModal"
      >
        {buttonTitle || title}
      </button>

      <div className="modal" tabIndex={-1} id="genericModal">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
