import axios from "axios";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
/*
맨처음 로그인하면 유저정보 받아오기, 토큰 받아오기
다이어리 페이지 접속하면 일주일치 받아와서 캐시 저장(새 일기 쓰면 늘어난 다이어리 배열 초기화하고 오늘꺼 넣어서 7개. 스크롤 하면 그때서야 다시 읽기)
마이페이지 접속하면 이미 다 있는 정보만 있다. 뿌리기. 총 몇개인지는 언제?
*/
interface loginInfoState {
    email: string,
    password: string
};

const Login = () => {

    const [loginInfo, setLoginInfo] = useState<loginInfoState>({
        email: '',
        password: ''
    })
    const inputHandler = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginInfo({ ...loginInfo, [key]: e.target.value })
    }
    const linkSignupHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {

    }
    const loginSubmitHandler = (loginInfo: loginInfoState) => async (e: React.MouseEvent<HTMLButtonElement>) => {
        //env 적용 해야함
        e.preventDefault();
        try {
            if (loginInfo.email === '' || loginInfo.password === '') {
                //setErrorMessage('이메일 혹은 비밀번호를 확인해주세요')
            }
            const body = { email: loginInfo.email, password: loginInfo.password };
            const userLogin = await axios.post(`http://localhost:8080/api/auth/login`, body, { withCredentials: true });

            const userInfo = userLogin.data
            return userInfo;
        } catch (error: any) {
            throw new Error(error)
        }

    }
    //아이디
    //비밀번호
    //회원가입 로그인

    //에러메시지 공간 필요함
    return (
        <div className="border h-screen flex items-center justify-center flex-col lg:mt-0">
            <Helmet>
                Login | 400JA-DIARY
            </Helmet>
            <div className="border w-full h-3/4 lg:max-w-screen-lg  flex flex-col items-center justify-center">
                <form className="border w-full h-1/4  flex flex-col items-center">
                    <div className="border flex  items-center mb-6">
                    <div className="border flex flex-col mt-10 items-center mb-6">
                        <input className="input border mb-1" type="email" name="email" onChange={inputHandler('email')} placeholder="email" required />
                        <input className="input border" type="password" name="password" onChange={inputHandler('password')} placeholder="Password" required />
                    </div>
                    <button className="border" onClick={loginSubmitHandler(loginInfo)}>로그인</button>
                    </div>
                </form>
                
                <div className="border flex items-center justify-between w-1/4">
                        <Link to ="/signup">
                        <span className="border" >회원 가입</span>
                        </Link>
                        <span className="border" >비밀번호 찾기</span>
                    </div>
                    <div className="border flex flex-col items-center justify-between w-1/4">
                        <button className="border">google</button>
                        <button className="border">kakao</button>
                    </div>
            </div>
        </div>
    )
};

export default Login;