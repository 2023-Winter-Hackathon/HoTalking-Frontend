import * as S from './style'
import { useParams } from 'react-router-dom';
import { useEffect,useState,useRef } from 'react';
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
            console.log(res.data);
            console.log(res.data.comments[0].comment_author);
        })
        .catch(e=>console.log(e));
    }, [id])
    const onChange = (e:any) =>{
        SetText(e.target.value);
    }
    interface dataProps{
        "content":string;
        "post_id":any;
    }

    const onClick = () =>{
        if (text!==''){
            let data:dataProps={
                "content":text,
                "post_id":id,
            }
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
                        <S.DetailCommentSubmit type="submit" value='작성하기' onClick={onClick}/>
                    </S.DetailCommentContainer>
                </S.DetailSidebar>
            </S.DetailForm>
        </S.DetailContainer>
    );
}