import axios from "axios";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import DateSearch from "./DateSearch";
import KeywordSearch from "./keywordSearch";

const SideBar = (props: any) => {
  const { setFindResult } = props;
  const constants = {
    keyWord: "keyWord",
    date: "date",
  };
  const [searchBox, setSearchBox] = useState(
    <KeywordSearch setFindResult={setFindResult} />
  );
  const toggleHandle = (elementId:string, classNameArr:string[]) => {
    classNameArr.forEach((targetClassname) => {
      document.getElementById(elementId)?.classList.toggle(targetClassname);
    });
    return {message:'toggle complete'};
  };

  const searchBoxChange =
    (key: string) => (e: React.MouseEvent<HTMLSpanElement>) => {
      if (key === constants.keyWord) {
        if (document.getElementById("searchForm-keyword")) {
          return ;
        }
        const gradientLtoR = ["bg-gradient-to-l", "bg-gradient-to-r"];
        toggleHandle("searchbox-gradient", gradientLtoR);
        setSearchBox(<KeywordSearch setFindResult={setFindResult} />);
        return ;
      }
      if (key === constants.date) {
        if (document.getElementById("searchForm-date")) {
          return ;
        }
        const gradientRtoL = ["bg-gradient-to-r", "bg-gradient-to-l"];
        toggleHandle("searchbox-gradient", gradientRtoL);
        setSearchBox(<DateSearch setFindResult={setFindResult} />);
        return ;
      }
    };

  

  const sideBarHandler = () => {
    const sideBarButtonOnOff = ["left-56", "rounded-r-md", "rounded-l-md", "border-l-2", "border-l-[#855958]"];
    toggleHandle("sideBar", ["hidden"]);
    toggleHandle("sidebar-hide-button", sideBarButtonOnOff);
  };

  return (
    <div className="flex w-full">
      <aside
        id="sideBar"
        className="fixed top-7 left-0 z-auto float-none overflow-auto w-64 h-full border-r-2 border-[#855958] bg-[#E3D8C5] box-border hidden"
      >
        <div id="searchbox-gradient" className=" bg-gradient-to-r from-[#753d3c] to-[#E3D8C5] mt-14 mb-28 gap-1 px-1 py-1 w-full flex justify-center ">
          <button
            id="searchbox-keyword"
            className="w-1/2 bg-[#E3D8C5] hover:bg-slate-300 border-slate-500"
            onClick={searchBoxChange(constants.keyWord)}
          >
            키워드 검색
          </button>
          <button
            id="searchbox-date"
            className="w-1/2 bg-[#E3D8C5] hover:bg-slate-300"
            onClick={searchBoxChange(constants.date)}
          >
            날짜 검색
          </button>
        </div>
        <div>{searchBox}</div>
      </aside>
      <button
        id="sidebar-hide-button"
        className="fixed top-2/3 z-auto inline-block w-8 h-24 border-t-2 border-b-2 border-r-2 border-t-[#855958] border-b-[#855958] border-r-[#855958] rounded-r-md outline-none hover:bg-[#dfcaa4] bg-[#E3D8C5]"
        onClick={sideBarHandler}
      >
        <FontAwesomeIcon icon={faSearch} size="1x"></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default SideBar;
