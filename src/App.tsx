import "../src/App.css";
import { ReactNode, useContext } from "react";
import { AppContext, AppContextProps } from "./contexts/AppContext";
import { Button } from "react-bootstrap";
import FormModal from "./components/FormModal";

interface AppProps {
  children: ReactNode;
}

function AppContainer({ children }: AppProps) {
  return <div className="container-fluid mt-3">{children}</div>;
}

export default function App() {
  const { handleToggleModal } = useContext<AppContextProps>(AppContext);

  return (
    <AppContainer>
      <Button variant="info" onClick={handleToggleModal}>
        Call Modal
      </Button>
      <FormModal
        title="Be careful!"
        iconType="warning"
        buttons={[
          {
            innerText: "Confirm",
            variant: "primary",
            method: function () {
              alert("hello!");
              handleToggleModal();
            },
          },
          {
            innerText: "Dismiss",
            variant: "secondary",
            method: handleToggleModal,
          },
        ]}
      />
    </AppContainer>
  );
}
