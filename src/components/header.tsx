import React from "react";
import { Link } from "react-router-dom";
type headerProps = {
    isLogin: boolean
}
const Header = (props: headerProps) => {
    //헤더. 컴포넌트로 옮기는게 좋을지도?
    //로고
    //홈버튼, 일기페이지, 마이페이지, 로그아웃

    const pageLink = () => {
        return (
            <div className="border">
                <Link to='/diary'>
                    <span className="text-xs"> Diary Link</span>
                </Link>
                <Link to='/mypage'>
                    <span className="text-xs"> Mypage Link</span>
                </Link>
                {/*서비스에서 로그아웃 함수 적용시키기*/}
                <span className="text-xs"> Logout Link</span>
            </div>
        )
    }
// 최소 640px로 제한하는게 좋을듯?
    return (
        <header className="border flex items-center justify-center lg:mt-0">
            <div className="border flex items-center justify-between w-full lg:max-w-screen-lg">
            <Link to='/'>
                <span className="border">logo Img.</span>
            </Link>
            {props.isLogin ? pageLink() : <div></div>}
            </div>
        </header>
    )
};

export default Header;