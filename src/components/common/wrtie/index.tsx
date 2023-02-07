import { useState, useRef } from 'react';
import * as S from './style';
import upload from '../.././../assets/upload/upload.svg';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { usePostWrite } from '../../../queries/write/write.query';
import { FormEvent } from 'react';
import axios from 'axios';
import { customAxios } from '../../../lib/axios/customAxios';
export default function Write(){

    const [title,SetTitle] = useState<string>('');
    const [contents,SetContents] = useState<string>('');

    const onChange = (e:any) =>{
        if(e.target.name === 'title') SetTitle(e.target.value);
        else if(e.target.name === 'post') SetContents(e.target.value);
    };

    //----
    const [imgList,setImgList] = useState<any>([])
    //----

    const imgRef = useRef<any>();
    // 이미지 업로드 input의 onChange
    const formData = new FormData();
    const saveImgFile = (e:React.ChangeEvent<HTMLInputElement>):void => {
	    // console.log(imgRef.current.files)
        setImgList((prev:string) => [...prev , ...imgRef.current.files])
         // 파일 객체
        console.log(formData);
    };
    const postWriteMutatin = usePostWrite();
    const onSubmit = async(e:FormEvent) => {
        if (title!=='' && contents!==''){
            try{
                formData.append('title',title);
                formData.append('content',contents);
                if(imgList.length!==0 ){
                    for(let i=0;i<imgList.length;i++){
                        formData.append("files",imgList[i])
                    }
                }

                for (let values of formData) {
                    console.log(values.values()); // 이미지 객체의 정보
                }

                e.preventDefault();
                const { data } = await customAxios.post("/post/create",  formData );
                
                SetTitle('');
                SetContents('');
                setImgList([]);
                console.log(data);
                alert('글 작성 성공!');
            }
            catch (e) {
                console.log('sdfsd');
                console.log(e);
            }
        }
        else{
            window.alert('제대로 입력해주세요!');
        }
    };
    return(
        <S.WriteContainer>
            <style>{"body{background-color:#F9F9F9}"}</style>
            <S.WriteForm>
                <S.WriteText1>당신의 이야기를 들려주세요.</S.WriteText1>
                <div>
                    <S.WriteTitle placeholder='제목을 입력하세요...' onChange={onChange} name='title' value={title}/>
                    <S.WriteImgShow>
                        {
                            imgList.length!==0
                            ?
                            <Splide
                                options={{
                                type: "loop",
                                autoplay: true,
                                arrows: false,
                                pagination: false,
                                interval: 2000,
                                speed: 1000,
                            }}
                            >
                                {imgList.map((img:any,idx:any) => {
                                    return (
                                        <SplideSlide key={idx}>
                                            <>
                                                <S.WrtieImgShow src={URL.createObjectURL(img)} />
                                            </>
                                        </SplideSlide>
                                    );
                                })}
                            </Splide>
                            :
                            <S.WriteText2>이미지 미리보기</S.WriteText2>
                        }
                    </S.WriteImgShow>
                </div>
                <div>
                    <S.WriteInput placeholder='글 작성...' value={contents} name='post' onChange={onChange}/>
                </div>
                    <S.WriteUploadContainer>
                        <img src={upload} alt='upload'/>
                        <S.WriteUploadLabel htmlFor="Img">이미지 업로드하기</S.WriteUploadLabel>
                        <S.WriteUploadFile type='file' id="Img" accept="image/*" multiple onChange={saveImgFile} ref={imgRef}/>
                    </S.WriteUploadContainer>
                <div>
                    <S.WriteSubmitBtn type='submit' onClick={onSubmit}>작성하기</S.WriteSubmitBtn>
                </div>
            </S.WriteForm>
        </S.WriteContainer>
    );
}