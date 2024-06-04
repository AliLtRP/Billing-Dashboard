import CustomTitle from "./CustomTitle";
import Wrapper from "./Wrapper";

const UserInfo = () => {
  return (
    <Wrapper>
      <CustomTitle title="Ildiko Gaspar" className="font-bold text-[#1A194D]" />
      <CustomTitle
        title="@igaspar"
        className="font-light text-sm text-[#62618F]"
      />
    </Wrapper>
  );
};

export default UserInfo;
