import CustomTitle from "../components/CustomTitle";
import Wrapper from "../components/Wrapper";

const Apps = () => {
  return (
    <Wrapper
      className="w-[57%]  py-10 px-16 flex flex-col justify-start gap-7 fadIn"
      handleClick={() => {}}
    >
      <CustomTitle title="Apps" className="text-3xl font-bold pt-2" />
    </Wrapper>
  );
};

export default Apps;
