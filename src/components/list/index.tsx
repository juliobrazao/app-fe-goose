import { useEffect, useState } from "react";
import { UserPayload } from "../../helpers/userSchema";
import UserBox from "../userbox";

export default function List() {
  const [usersList, setUsersList] = useState<UserPayload[]>([]);

  const fetchUsers = async () => {
    fetch(
      `http://${process.env.REACT_APP_BE_HOST}:${process.env.REACT_APP_BE_PORT}/user`
    )
      .then((res) => res.json())
      .then((data) => setUsersList(data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className="card mt-3">
        <div className="card-header">
          <strong>Current List</strong>
        </div>

        <div className="card-body">
          <ul className="list-unstyled">
            {usersList &&
              usersList.map((user, idx) => (
                <li key={idx}>
                  <UserBox userProps={user} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
