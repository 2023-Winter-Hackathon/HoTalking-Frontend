import { useEffect } from "react";
import { SpinnerContainer, SpinnerItem } from "./authLoadingPage.style";

interface Props {
  isAbsolute?: boolean;
  isLoading: boolean;
}

const AuthLoadingPage = ({ isAbsolute, isLoading }: Props) => {
  useEffect(() => {
    if (isLoading) {
      document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = "";
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      };
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && (
        <SpinnerContainer isAbsolute={isAbsolute}>
          <SpinnerItem />
        </SpinnerContainer>
      )}
    </>
  );
};

export default AuthLoadingPage;