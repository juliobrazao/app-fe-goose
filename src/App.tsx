import { ReactNode, useState } from "react";
import "../src/App.css";
import Form from "./components/Form";
import List from "./components/List";
import Modal from "./components/Modal";
import { AppContext } from "./contexts/AppContext";
import { UserPayload } from "./helpers/userSchema";
import Navbar from "./components/Navbar";

interface AppProps {
  children: ReactNode;
}

function AppContainer({ children }: AppProps) {
  return <div className="container-fluid mt-3">{children}</div>;
}

function AddUserModal() {
  return (
    <Modal title="Create New User">
      <Form />
    </Modal>
  );
}

export default function App() {
  const [usersList, setUsersList] = useState<UserPayload[]>([]);
  const [listHasChanged, setListHasChanged] = useState<boolean>(false);
  const [showDialog, setShowDialog] = useState<boolean>(false);

  return (
    <>
      <AppContext.Provider
        value={{
          usersList,
          setUsersList,
          listHasChanged,
          setListHasChanged,
          showDialog,
          setShowDialog,
        }}
      >
        <Navbar title="User creator">
          <AddUserModal />
        </Navbar>
        <AppContainer>
          <List />
        </AppContainer>
      </AppContext.Provider>
    </>
  );
}
