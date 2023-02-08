import * as S from './style'
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { customAxios } from '../../../lib/axios/customAxios';
import config from '.././.././../config/config.json'
export default function Detail(){
    const [articles,SetAricles] = useState<any>({});
    const { id } = useParams<any>();
    const [text,SetText]=useState<string>('');
    useEffect(() => {
        customAxios.get(`post/${id}`)
        .then((res) => {
            SetAricles(res.data);
        })
        .catch(e=>console.log(e));
    }, [id])
    const onChange = (e:any) =>{SetText(e.target.value);}

    interface dataProps{
        "content":string;
        "post_id":string|undefined;
    }
    interface delProps{
        "post_id":string|undefined;
    }

    const onDelete = () =>{
        let data:delProps={
            "post_id":id,
        };
        customAxios.delete(`post/delete/${id}`,{data})
        .then(()=>{window.alert('게시글이 삭제되었습니다!')})
        .catch((err)=>{console.log(err)})
    }

    const onSubmit = () =>{
        if (text!==''){
            let data:dataProps={
                "content":text,
                "post_id":id,
            };
            customAxios.post('comment/create',data)
            .then((res) => {console.log(res);})
            .catch((err) => {console.log(err);})
            SetText('');
        }
    }
    return(
        <S.DetailContainer>
            <S.DetailForm>
                <S.DetailBox>
                    <S.DetailTitle>{articles.title}</S.DetailTitle>
                    <S.DetailPicContainer>
                        <S.DetailPicture src={`${config.server}/post/images/${id}`} /> 
                    </S.DetailPicContainer>

                    <S.DetailContentsContainer>
                        <S.DetailContents>
                            {articles.content}
                        </S.DetailContents>
                        <S.DeleteBtn onClick={onDelete}>글 삭제하기</S.DeleteBtn>
                    </S.DetailContentsContainer>
                </S.DetailBox>

                <S.DetailSidebar>
                    <S.DetailCommentShowContainer>
                        <S.DetailCommentShowBox>
                            <ul>
                                {
                                    articles.comments && articles.comments.map((e:any)=>(
                                        <S.DetailCommentli key={e.id}>{e.comment_author} : {e.comment}</S.DetailCommentli>
                                    ))
                                }
                            </ul>
                        </S.DetailCommentShowBox>
                    </S.DetailCommentShowContainer>

                    <S.DetailCommentContainer>
                        <S.DetailCommentBox onChange={onChange} value={text} placeholder='댓글을 작성해주세요...'/>
                        <S.DetailCommentSubmit type="submit" value='작성하기' onClick={onSubmit}/>
                    </S.DetailCommentContainer>
                </S.DetailSidebar>
            </S.DetailForm>
        </S.DetailContainer>
    );
}