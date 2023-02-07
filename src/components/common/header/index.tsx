import * as S from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "./../.././../assets/logo/logo.svg";
import config from "../../../config/config.json";

export default function Header() {
  const authUrl = `http://dauth.b1nd.com/login?client_id=${config.clientId}&redirect_uri=http://localhost:3000/callback`;
  return (
    <S.HeadContainer>
      <S.HeadContants1>
        <S.HeadLogo src={logo} alt="뉴진스" />
        <S.HeadTitle>
          Ho
          <S.HeaderTitleColor style={{ color: "#FF7777" }}>
            T
          </S.HeaderTitleColor>
          alking
        </S.HeadTitle>
      </S.HeadContants1>
      <S.HeadContants2>
        <S.HeadSearch style={{ marginRight: "21px" }} />
        <S.HeadLogin onClick={() => (window.location.href = authUrl)}>
          로그인
        </S.HeadLogin>
      </S.HeadContants2>
    </S.HeadContainer>
  );
}
