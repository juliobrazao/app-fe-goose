import { useContext } from "react";
import { UserPayload } from "../helpers/userSchema";
import { AppContext } from "../contexts/AppContext";

interface UserBoxProps {
  userProps: UserPayload;
}

export default function UserBox({ userProps }: UserBoxProps) {
  const { listHasChanged, setListHasChanged } = useContext(AppContext);

  const handleDeleteButtonClick = (id: string) => {
    fetch(`http://localhost:3000/user/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(function () {
        setListHasChanged(!listHasChanged);
      });
  };

  return (
    <>
      <div
        className={`alert alert-${userProps.isAdmin ? "info" : "primary"} mt-3`}
        role="alert"
      >
        <h3>{userProps.name}</h3>
        <h6>{userProps.email}</h6>

        <button onClick={() => handleDeleteButtonClick(userProps._id)}>
          Delete
        </button>
      </div>
    </>
  );
}
