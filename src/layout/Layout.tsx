import React from "react";
import Wrapper from "../components/Wrapper";
import UserInfo from "../components/UserInfo";
import NavigationList from "../components/NavigationList";
import LogOutNav from "../components/LogOutNav";
import image from "../assets/Rectangle 3.png";
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Wrapper className="w-[100vw] h-[100vh] flex">
      <Wrapper className="w-full h-full flex flex-col items-center justify-start gap-10 pl-2 pt-10 pb-8 basis-[20%] bg-[#F8F8FF]">
        <Wrapper className="w-[80%] h-14 flex items-center gap-4">
          <img src={image} alt="user image" />
          <UserInfo />
        </Wrapper>

        <Wrapper className="w-full flex justify-start pl-2 pt-4">
          <NavigationList />
        </Wrapper>
        <LogOutNav />
      </Wrapper>

      {children}
    </Wrapper>
  );
};

export default Layout;
