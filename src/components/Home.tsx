import Wrapper from "./Wrapper";
import CustomTitle from "./CustomTitle";
import OrderHistory from "./OrderHistory";
import visa from "../assets/3e70a2c7dab9e8137f7a7e39f049e2e3.png";
import CustomButton from "./CustomButton";

const Home = () => {
  return (
    <Wrapper className="w-ful flex">
      <Wrapper className="w-[70%]  py-10 px-16 flex flex-col bg-[] justify-start gap-7 fadIn">
        <CustomTitle title="Billing" className="text-3xl font-bold pt-2" />

        <Wrapper className="flex flex-col pt-7 gap-8">
          <OrderHistory />

          <Wrapper className="w-full h-auto min-h-36">
            <table className="table-auto border-spacing-y-3.5 border-separate">
              <thead>
                <tr className="text-sm text-[#62618F]">
                  <th className="text-start font-normal">Date</th>
                  <th className="text-start font-normal">Type</th>
                  <th className="text-start font-normal">Receipt</th>
                </tr>
              </thead>
              <tbody>
                <tr className="font-normal text-sm">
                  <td className="w-52">Oct. 21, 2021</td>
                  <td className="w-72">Pro Annual</td>
                  <td className="w-auto">
                    <CustomButton title="Download" onClick={() => {}} />
                  </td>
                </tr>
                <tr className="font-normal text-sm">
                  <td className="">July. 21, 2021</td>
                  <td>Sponsored Post</td>
                  <td>
                    <CustomButton title="Download" onClick={() => {}} />
                  </td>
                </tr>
                <tr className="font-normal text-sm">
                  <td className="">Jun. 21, 2021</td>
                  <td>Sponsored Post</td>
                  <td>
                    <CustomButton title="Download" onClick={() => {}} />
                  </td>
                </tr>
              </tbody>
            </table>
          </Wrapper>

          <CustomTitle
            title="Load more"
            className="py-3 underline text-[#EE4D38]"
          />
          <Wrapper className="h-36 pt-2">
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

              <Wrapper>
                <CustomButton title="Remove" className="" onClick={() => {}} />
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>

      <Wrapper className="py-[134px] w-[27%] flex justify-start h-full text-[#fff]">
        <Wrapper className=" bg-[#EE4D38] w-[258px] h-[221px] rounded-3xl flex flex-col gap-4 p-8">
          <CustomTitle title="Your plan" className="font-normal" />

          <Wrapper>
            <CustomTitle title="Pro Annual" className="font-bold text-2xl" />
            <CustomTitle
              title="Renews on  Nov. 2021"
              className="text-sm font-normal"
            />
          </Wrapper>

          <CustomButton
            title="Cancel subscription"
            className="text-[#fff] border-opacity-50 font-normal w-full"
            onClick={() => {}}
          />
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default Home;
