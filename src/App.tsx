import "./App.css";
import Wrapper from "./components/Wrapper";
import image from "./assets/Rectangle 3.png";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <Wrapper className="w-[100vw] h-[100vh] flex">
      <Wrapper className="w-full h-full flex flex-col items-center justify-center basis-[20%] bg-[#F8F8FF]">
        <Wrapper className="w-[80%] h-14 flex items-center gap-4">
          <img src={image} alt="user image" />
          <UserInfo />
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
}

export default App;
