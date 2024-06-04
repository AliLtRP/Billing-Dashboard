import CustomTitle from "./CustomTitle";
import { Lock, Billing, Square, Mail, DoubleSquare } from "../svgs/index";
import Wrapper from "./Wrapper";
import { useState } from "react";

const NavigationList = () => {
  const [flag, setFlag] = useState<boolean>(false);

  return (
    <ul className="w-[80%] flex flex-col gap-4 items-start">
      <li className="flex w-full justify-start items-center gap-2">
        <Wrapper className="bg-[#fff] w-[6px] h-full rounded-xl" />
        <Wrapper
          handleClick={() => setFlag(!flag)}
          className="w-full basis-[90%] gap-2 flex items-center"
        >
          <DoubleSquare color={flag ?? "#1A194D"} />
          <CustomTitle
            title="General"
            className="text-[#62618F] text-sm font-light"
          />
        </Wrapper>
      </li>
      <li className="flex items-center gap-2">
        <Wrapper className="bg-[#fff] w-[6px] h-full rounded-xl" />
        <Lock />
        <CustomTitle
          title="Password"
          className="text-[#62618F] text-sm font-light"
        />
      </li>
      <li className="flex items-center gap-2">
        <Wrapper className="bg-[#fff] w-[6px] h-full rounded-xl" />
        <Mail color="#62618F" />
        <CustomTitle
          title="Invitations"
          className="text-[#62618F] text-sm font-light"
        />
      </li>
      <li className="flex items-center gap-2">
        <Wrapper className="bg-[#EE4D38] w-[6px] h-full rounded-xl" />
        <Billing color="#1A194D" />
        <CustomTitle
          title="Billing"
          className="text-[#1A194D] text-sm font-light"
        />
      </li>
      <li className="flex items-center gap-2">
        <Wrapper className="bg-[#fff] w-[6px] h-full rounded-xl" />
        <Square size={25} color="#62618F" />
        <CustomTitle
          title="Apps"
          className="text-[#62618F] text-sm font-light"
        />
      </li>
    </ul>
  );
};

export default NavigationList;
