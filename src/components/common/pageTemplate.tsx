import { ReactNode } from "react";
import GlobalStyle from "../../styles/GlobalStyles";

interface Props {
  children: ReactNode;
}

function PageTemplate({ children }: Props) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}

export default PageTemplate;
