import React, { useState, useRef, useEffect } from "react";
import * as S from "./style";
import upload from "../.././../assets/upload/upload.svg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { customAxios } from "../../../lib/axios/customAxios";
import "@splidejs/react-splide/css";

const Write = () => {
  const [title, SetTitle] = useState<string>("");
  const [contents, SetContents] = useState<string>("");

  const onChange = (e: any) => {
    if (e.target.name === "title") SetTitle(e.target.value);
    else if (e.target.name === "post") SetContents(e.target.value);
  };

  //----
  const [imgList, setImgList] = useState<any>([]);
  //----

  const imgRef = useRef<any>();
  // 이미지 업로드 input의 onChange
  const saveImgFile = (e: React.ChangeEvent<HTMLInputElement>): void => {
    //console.log(imgRef.current.files);
    setImgList((prev: any) => [...prev, ...imgRef.current.files]);
    // 파일 객체
    // 이미지 업로드 input의 onChange
    const formData = new FormData();
    const saveImgFile = (e: React.ChangeEvent<HTMLInputElement>): void => {
      // console.log(imgRef.current.files)
      setImgList((prev: string) => [...prev, ...imgRef.current.files]);
      // 파일 객체
      console.log(formData);
    };
    const onSubmit = async (e: any) => {
      if (title !== "" && contents !== "") {
        try {
          formData.append("title", title);
          formData.append("content", contents);
          if (imgList.length !== 0) {
            for (let i = 0; i < imgList.length; i++) {
              formData.append("files", imgList[i]);
            }
          }

          for (let values of formData) {
            console.log(values.values()); // 이미지 객체의 정보
          }

          e.preventDefault();
          const { data } = await customAxios.post("/post/create", formData);

          SetTitle("");
          SetContents("");
          setImgList([]);
          console.log(data);
          alert("글 작성 성공!");
        } catch (e) {
          console.log(e);
        }
      } else {
        window.alert("제대로 입력해주세요!");
      }
    };
  };
 };


export default Write;