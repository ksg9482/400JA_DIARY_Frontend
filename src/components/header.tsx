import axios from "axios";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faUser, faRightFromBracket, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
type headerProps = {
  isLogin: boolean;
};
const Header = (props: headerProps) => {
  const navigate = useNavigate()
  const [screenX, setScreenX] = useState(window.innerWidth)
  const logOutHandle = async () => {
    const userLogout = await axios.get(
      `http://localhost:8080/api/user/logout`,
      { withCredentials: true }
    );
    navigate('/', { replace: true })
    location.reload()
    return;
  };
  const pageLink = () => {
    return (
      <div className="w-5/12 flex flex-col min-w-min">
        <div className=" flex justify-between gap-3">
          <Link className="border box-border px-1 w-24" to="/">
            <span className="text-base  ">
              <FontAwesomeIcon className="mr-1" icon={faPencil} size='1x'></FontAwesomeIcon>
              Diary
            </span>
          </Link>
          <Link className="border box-border px-1 w-24" to="/mypage">
            <span className="text-base ">
              <FontAwesomeIcon className="mr-1" icon={faUser} size='1x'></FontAwesomeIcon>
              Mypage
            </span>
          </Link>
          <button className="border box-border px-1 w-24" onClick={logOutHandle}>
            <span className="text-base" >
              <FontAwesomeIcon className="mr-1" icon={faRightFromBracket} size='1x'></FontAwesomeIcon>
              LogOut
            </span>
          </button>
        </div>
      </div>

    );
  };

  const screenResize = () => {
    setScreenX(window.innerWidth)
  };

  
  useEffect(()=>{
    window.addEventListener('resize',screenResize)
  },[])
  
  return (
    <header className="border-b-2 border-b-slate-500 fixed w-full bg-white flex items-center justify-center px-5">
      <div className="flex items-center justify-between w-full lg:max-w-screen-lg">
        {screenX <= 500 ? null :
        <Link className="border w-32 mr-3" to="/">
        <span className="whitespace-nowrap">
          <FontAwesomeIcon className="mx-1" icon={faBookOpen} size='1x'></FontAwesomeIcon>
          400JA-DIARY
        </span>
      </Link>
        }
        

        {props.isLogin ? pageLink() : <div></div>}
      </div>
    </header>
  );
};

export default Header;
