import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export interface AppContextProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  handleToggleModal: () => void;
}

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContext = createContext<AppContextProps>({
  showModal: false,
  setShowModal: () => {},
  handleToggleModal: () => {},
});

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <AppContext.Provider value={{ showModal, setShowModal, handleToggleModal }}>
      {children}
    </AppContext.Provider>
  );
}
