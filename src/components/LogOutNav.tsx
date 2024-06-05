import { LogOut } from "../svgs";
import CustomTitle from "./CustomTitle";
import Wrapper from "./Wrapper";

const LogOutNav = () => {
  return (
    <Wrapper className="w-full h-full pt-10 flex items-end gap-2 pl-4 relative">
      <Wrapper className="flex items-center gap-2">
        <LogOut />
        <CustomTitle title="Log out" className="text-[#62618F]" />
      </Wrapper>
    </Wrapper>
  );
};

export default LogOutNav;
