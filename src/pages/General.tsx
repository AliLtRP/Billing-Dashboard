import CustomTitle from "../components/CustomTitle";
import Wrapper from "../components/Wrapper";

const General = () => {
  return (
    <Wrapper className="w-[57%]  py-10 px-16 flex flex-col justify-start gap-7 fadIn">
      <CustomTitle title="General" className="text-3xl font-bold pt-2" />
    </Wrapper>
  );
};

export default General;
