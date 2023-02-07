import { ReactNode } from "react";
import GlobalStyle from "../../styles/GlobalStyles";
import Header from "./header";

interface Props {
  children: ReactNode;
}

function PageTemplate({ children }: Props) {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
    </>
  );
}

export default PageTemplate;
