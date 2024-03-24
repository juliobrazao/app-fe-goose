import "../src/App.css";
import { ReactNode } from "react";
import Form from "./components/form";
import List from "./components/list";
import Modal from "./components/modal";

interface AppProps {
  children: ReactNode;
}

function AppContainer({ children }: AppProps) {
  return <div className="container-fluid mt-3">{children}</div>;
}

export default function App() {
  return (
    <>
      <AppContainer>
        <List />
      </AppContainer>
      <Modal title="Create New User" buttonTitle="+">
        <Form />
      </Modal>
    </>
  );
}
