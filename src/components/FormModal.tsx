import CustomModal, { CustomModalActionButton } from "./CustomModal";

interface FormModalProps {
  title?: string;
  buttons?: CustomModalActionButton[];
}
export default function FormModal({
  title,
  buttons = [
    {
      innerText: "Dismiss",
      variant: "secondary",
      method: () => {},
    },
  ],
}: Partial<FormModalProps>) {
  return (
    <CustomModal title={title} actionButtons={buttons}>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="" />
        <label className="form-check-label" htmlFor="">
          {" "}
          Default checkbox{" "}
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="" />
        <label className="form-check-label" htmlFor="">
          {" "}
          Checked checkbox{" "}
        </label>
      </div>
    </CustomModal>
  );
}
