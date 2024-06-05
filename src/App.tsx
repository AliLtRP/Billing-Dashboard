import "./App.css";
import Wrapper from "./components/Wrapper";
import image from "./assets/Rectangle 3.png";
import UserInfo from "./components/UserInfo";
import NavigationList from "./components/NavigationList";
import LogOutNav from "./components/LogOutNav";
import CustomTitle from "./components/CustomTitle";
import OrderHistory from "./components/OrderHistory";
import visa from "./assets/3e70a2c7dab9e8137f7a7e39f049e2e3.png";

function App() {
  return (
    <Wrapper className="w-[100vw] h-[100vh] flex">
      <Wrapper className="w-full h-full flex flex-col items-center justify-start gap-10 pl-2 pt-16 pb-8 basis-[20%] bg-[#F8F8FF]">
        <Wrapper className="w-[80%] h-14 flex items-center gap-4">
          <img src={image} alt="user image" />
          <UserInfo />
        </Wrapper>

        <Wrapper className="w-full flex justify-start pl-2 pt-4">
          <NavigationList />
        </Wrapper>
        <LogOutNav />
      </Wrapper>

      <Wrapper className="w-[57%]  py-16 px-16 flex flex-col justify-between">
        <CustomTitle title="Billing" className="text-3xl font-bold pt-2" />

        <OrderHistory />

        <Wrapper className="w-full h-36">
          <table className="table-auto">
            <thead>
              <tr className="h-8">
                <th className="text-start">Song</th>
                <th className="text-start">Artist</th>
                <th className="text-start">Year</th>
              </tr>
            </thead>
            <tbody>
              <tr className="w-auto h-8">
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>
                  <button>Download</button>
                </td>
              </tr>
              <tr className="h-8">
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr className="h-8">
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
            </tbody>
          </table>
        </Wrapper>

        <CustomTitle title="Load more" className=" underline text-[#EE4D38]" />
        <Wrapper className="h-36">
          <CustomTitle title="Payment Method" className="font-bold" />
          <CustomTitle
            title="Manage billing information and view receips"
            className="text-sm text-[#62618F]"
          />

          <Wrapper className="py-6 flex w-full items-center gap-2.5">
            <Wrapper className="w-[87px] h-[58px] border-[1px] border-[#CBCBD9] flex justify-center items-center p-[10px] rounded-lg">
              <img src={visa} alt="visa img" />
            </Wrapper>

            <Wrapper className="basis-[80%]">
              <CustomTitle
                title="Visa ending in 2255"
                className="text-[#1A194D]"
              />
            </Wrapper>

            <Wrapper>sd</Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>

      <Wrapper className="py-40 w-[20%] flex justify-start h-full">
        <Wrapper className=" bg-[#EE4D38] w-64 h-56 rounded-3xl"></Wrapper>
      </Wrapper>
    </Wrapper>
  );
}

export default App;
