import "./App.css";
import Wrapper from "./components/Wrapper";
import image from "./assets/Rectangle 3.png";
import UserInfo from "./components/UserInfo";
import NavigationList from "./components/NavigationList";
import CustomTitle from "./components/CustomTitle";
import { LogOut } from "./svgs";

function App() {
  return (
    <Wrapper className="w-[100vw] h-[100vh] flex">
      <Wrapper className="w-full h-full flex flex-col items-center justify-start gap-10 pl-2 py-16 basis-[20%] bg-[#F8F8FF]">
        <Wrapper className="w-[80%] h-14 flex items-center gap-4">
          <img src={image} alt="user image" />
          <UserInfo />
        </Wrapper>

        <Wrapper className="w-full flex justify-start pl-2 pt-4">
          <NavigationList />
        </Wrapper>

        <Wrapper className="w-full h-full pt-10 flex items-end gap-2 pl-4 relative">
          <Wrapper className="flex items-center gap-2">
            <LogOut />
            <CustomTitle title="Log out" className="text-[#62618F]" />
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
}

export default App;
