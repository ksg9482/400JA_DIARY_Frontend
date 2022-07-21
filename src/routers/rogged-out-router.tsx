import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from '../pages/signup/signupPage';
import Login from '../pages/login/loginPage';
export const LoggedOutRouter = () => {
    //로그인 하지 않은 상태에서 가능한 라우터
    //Header 만들어서 넣어야 함
    //로그인이 기본 페이지. 아니면 인트로페이지 만들고 옆쪽에 로그인 기능 있게??
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    )
}