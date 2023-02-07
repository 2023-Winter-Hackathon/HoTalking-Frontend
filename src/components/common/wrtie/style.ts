import styled from "styled-components";

export const WriteContainer = styled.div`
    width: 100%;
    height: calc(100vh - 66px);
`;

export const WriteForm = styled.div`
    width: 1222px;
    /* background-color:green; */
    height:800px;
    margin:0 auto; 
    margin-top:66px;
`;

export const WriteText1 = styled.h1`
    font-weight: 600;
    font-size: 32px;
    line-height: 38px;
    padding-top:50px;
`;

export const WriteTitle = styled.input`
    width: 822px;
    height:90px;
    margin-top:60px;
    font-size:30px;
    padding-left:37px;
    outline:none;
    border:none;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
`;

export const WriteImgShow = styled.div`
    width:  363px;
    height: 363px;
    background-color:#FFFFFF;
    float: right;
    box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
    margin-top:60px;
    text-align : center;
    vertical-align:middle;
    color:#949191;
`;

export const WriteText2 = styled.div`
    position: relative; 
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
`;

export const WrtieImgShow = styled.img`
    width:  363px;
    height: 363px;
    border-radius: 15px;
`;

export const WriteInput = styled.textarea`
    width: 822px;
    height: 420px;
    background-color:#FFFFFF;
    margin-top: 20px;
    outline: none;
    border: none;
    box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
    padding-top:45px;
    padding-left:37px;
    font-size:22px;
    resize: none;
`;

export const WriteUploadContainer = styled.form`
    float:right;
    position: relative;
    right: 210px;
    bottom: 145px;
    display:flex;
    gap:5px;
`;

export const WriteUploadLabel = styled.label`
    margin-top:8px;
`;

export const WriteUploadFile = styled.input`
    display:none;
`;

export const WriteSubmitBtn = styled.button`
    width:318px;
    height:50px;
    float:right;
    position:relative;
    left:130px;
    bottom: 50px;
    border-radius: 15px;
    background-color:#FF7777;
    outline:none;
    border:none;
    box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    font-size:20px;
`;