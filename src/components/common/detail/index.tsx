import { useParams } from "react-router-dom";
import * as S from './style'

export default function Detail(){
    const { id } = useParams();
    return(
        <S.DetailContainer>
            <S.DetailForm>
                <S.DetailBox>

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