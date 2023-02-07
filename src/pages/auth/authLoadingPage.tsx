import useLogin from "../../hooks/auth/useLogin";

interface Props {
  isAbsolute?: boolean;
  isLoading: boolean;
}

const AuthLoadingPage = () => {
  useLogin();
  return <div>AuthLoadingPage</div>;
};

export default AuthLoadingPage;
