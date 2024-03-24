import { ReactNode, useState } from "react";
import "../src/App.css";
import Form from "./components/Form";
import List from "./components/List";
import Modal from "./components/Modal";
import { AppContext } from "./contexts/AppContext";
import { UserPayload } from "./helpers/userSchema";

interface AppProps {
  children: ReactNode;
}

function AppContainer({ children }: AppProps) {
  return <div className="container-fluid mt-3">{children}</div>;
}

export default function App() {
  const [usersList, setUsersList] = useState<UserPayload[]>([]);

  return (
    <>
      <AppContext.Provider value={{ usersList, setUsersList }}>
        <AppContainer>
          <List />
        </AppContainer>
        <Modal title="Create New User" buttonTitle="+">
          <Form />
        </Modal>
      </AppContext.Provider>
    </>
  );
}
