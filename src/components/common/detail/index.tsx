import { useParams } from "react-router-dom";
import * as S from './style'
export default function Detail(){
    const { id } = useParams();
    return(
        <S.DetailContainer>
            <S.DetailForm>
                <S.DetailBox>
                    <S.DetailTitle>1학년 제주도 꿀팁</S.DetailTitle>
                    <S.DetailPicContainer>
                        {/* 이미지 */}
                        <S.DetailPicture/> 
                    </S.DetailPicContainer>

                    <S.DetailContentsContainer>
                        <S.DetailContents>
                            
                        </S.DetailContents>
                    </S.DetailContentsContainer>
                </S.DetailBox>

                <S.DetailSidebar>
                    <S.DetailCommentShowContainer>
                        <S.DetailCommentShowBox>
                            
                        </S.DetailCommentShowBox>
                    </S.DetailCommentShowContainer>

                    <S.DetailCommentContainer>
                        <S.DetailCommentBox/>
                        <S.DetailCommentSubmit type="submit" value='작성하기'/>
                    </S.DetailCommentContainer>
                </S.DetailSidebar>
            </S.DetailForm>
        </S.DetailContainer>
    );
}