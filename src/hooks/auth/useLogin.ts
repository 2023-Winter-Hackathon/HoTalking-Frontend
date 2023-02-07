import queryString from "query-string";
import { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ACCESS_KEY } from "../../constants/token/token.constant";
import authRepository from "../../repository/auth/auth.repository";

const useLogin = () => {
  const { search } = useLocation();
  const query = queryString.parse(search);
  const navigate = useNavigate();
  const request = useCallback(async () => {
    // try {
    //   // const { accessToken } = await authRepository.login({
    //     code: query.code as string,
    //   });
      localStorage.setItem(ACCESS_KEY, accessToken);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    if (query) {
      request();
    }
  }, [query]);
  return {
    request,
  };
};

export default useLogin;
