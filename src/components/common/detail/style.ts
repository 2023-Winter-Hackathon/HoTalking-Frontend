import styled from "styled-components";

export const DetailContainer = styled.div`
    width: 100%;
    height: calc(100vh - 66px);
`;

export const DetailForm = styled.div`
    display: flex;
    margin:0 auto; 
    margin-top:66px;
    /* background-color:green; */
    align-items:center;
`;

export const DetailBox = styled.div`
    width: 888px;
    height: 780px;
    border-radius: 15px;
    background-color: #ECECEC;
    margin-top: 10px;
    margin-left:10vw;
    gap: 5px;
`;

export const DetailTitle = styled.div`
    margin-top:49px;
    margin-left:43px;
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
`;

export const DetailPicContainer = styled.div`
    text-align: center;
    margin-top:23px;
`;

export const DetailContentsContainer = styled.div`
    text-align: center;
    margin-left:45px;
`;

export const DetailContents = styled.div`
    width:800px;
    height:200px;
    /* background-color:white; */
    text-align:left;
    padding-top:13px;
`;

export const DetailPicture = styled.img`
    width: 800px;
    height: 450px;
    background-color:white;
`

export const DetailSidebar = styled.div`
    width: 309px;
    height: 780px;
    background-color: #ECECEC;
    border-radius:15px;
    margin-left:20px;
    margin-top: 10px;
    margin-right:38px;
    gap:5px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items:center;
`;

export const DetailCommentShowContainer = styled.div`

`;

export const DetailCommentShowBox = styled.div`
    width:287px;
    height: 530px;
    background-color: #FFFFFF;
    margin-top:10px;
`;

export const DetailCommentContainer = styled.div`
    position: absolute;
    bottom: 5px;
`;

export const DetailCommentBox =  styled.textarea`
    width:287px;
    height:216px;
    background-color:#FFFFFF;
    outline: none;
    border: none;
    box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
    resize: none;
    font-size:15px;
    padding-top:16px;
    padding-left:18px;
    
`;

export const DetailCommentSubmit = styled.input`
    width: 69px;
    height: 36px;
    background-color: #FF7777;
    border-radius: 15px;
    outline: none;
    border:none;
    position: absolute;
    bottom:10px;
    right:10px;
    cursor: pointer;
`;