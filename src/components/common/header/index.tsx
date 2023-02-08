import * as S from "./style";
import { useState } from "react";
import logo from "./../.././../assets/logo/logo.svg";
import config from "../../../config/config.json";
import { useNavigate } from "react-router-dom";
import profile from '.././.././../assets/profile/profile.svg'
export default function Header() {
  const navigate = useNavigate();
  const authUrl = `http://dauth.b1nd.com/login?client_id=${config.clientId}&redirect_uri=http://localhost:3000/callback`;

  return (
    <S.HeadContainer>
      <S.HeadContants1
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
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
        <S.HeadSearch style={{ marginRight: "21px" }}/>
        <S.HeadWrite onClick={()=>navigate('/write')}>글 작성하기</S.HeadWrite>
        <S.HeadLogin onClick={() => (window.location.href = authUrl)}>로그인</S.HeadLogin>
        <S.HeadProfile src={profile} onClick={()=>navigate('/myinfo')}/>
      </S.HeadContants2>
    </S.HeadContainer>
  );
}
