import CustomTitle from "./CustomTitle";
import { Lock, Billing, Square, Mail, DoubleSquare } from "../svgs/index";
import Wrapper from "./Wrapper";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavigationList = () => {
  const [general, setGeneral] = useState<boolean>(true);
  const [password, setPassword] = useState<boolean>(false);
  const [invitations, setInvitations] = useState<boolean>(false);
  const [billing, setBilling] = useState<boolean>(false);
  const [apps, setApps] = useState<boolean>(false);

  return (
    <ul className="w-[80%] flex flex-col gap-5 items-start">
      <li className="flex w-full justify-start items-center gap-2">
        <Wrapper
          className={`bg-[${
            general ? "#EE4D38" : "#F8F8FF"
          }] w-[6px] h-full rounded-xl`}
        />
        <Wrapper
          handleClick={() => {
            setGeneral(!general);
            setPassword(false);
            setInvitations(false);
            setBilling(false);
            setApps(false);
          }}
          className="w-full basis-[90%] hover:cursor-pointer"
        >
          <Link to={"/general"} className="gap-2 flex items-center">
            <DoubleSquare color={general ? "#1A194D" : "#62618F"} />
            <CustomTitle
              title="General"
              className={`text-[${
                general ? "#1A194D" : "#62618F"
              }] text-sm font-light`}
            />
          </Link>
        </Wrapper>
      </li>
      <li className="flex items-center gap-2">
        <Wrapper
          className={`bg-[${
            password ? "#EE4D38" : "#F8F8FF"
          }] w-[6px] h-full rounded-xl`}
        />
        <Wrapper
          handleClick={() => {
            setGeneral(false);
            setPassword(!password);
            setInvitations(false);
            setBilling(false);
            setApps(false);
          }}
          className="w-full basis-[90%]  hover:cursor-pointer"
        >
          <Link to={"/password"} className="gap-2 flex items-center">
            <Lock color={password ? "#1A194D" : "#62618F"} />
            <CustomTitle
              title="Password"
              className={`text-[${
                password ? "#1A194D" : "#62618F"
              }] text-sm font-light`}
            />
          </Link>
        </Wrapper>
      </li>
      <li className="flex items-center gap-2">
        <Wrapper
          className={`bg-[${
            invitations ? "#EE4D38" : "#F8F8FF"
          }] w-[6px] h-full rounded-xl`}
        />
        <Wrapper
          handleClick={() => {
            setGeneral(false);
            setPassword(false);
            setInvitations(!invitations);
            setBilling(false);
            setApps(false);
          }}
          className="w-full basis-[90%] gap-2 flex items-center hover:cursor-pointer"
        >
          <Link to={"/invitations"} className="gap-2 flex items-center">
            <Mail color={invitations ? "#1A194D" : "#62618F"} />
            <CustomTitle
              title="Invitations"
              className={`text-[${
                invitations ? "#1A194D" : "#62618F"
              }] text-sm font-light`}
            />
          </Link>
        </Wrapper>
      </li>
      <li className="flex items-center gap-2">
        <Wrapper
          className={`bg-[${
            billing ? "#EE4D38" : "#F8F8FF"
          }] w-[6px] h-full rounded-xl`}
        />
        <Wrapper
          handleClick={() => {
            setGeneral(false);
            setPassword(false);
            setInvitations(false);
            setBilling(!billing);
            setApps(false);
          }}
          className="w-full basis-[90%] gap-2 flex items-center hover:cursor-pointer"
        >
          <Link to={"/billing"} className="gap-2 flex items-center">
            <Billing color={billing ? "#1A194D" : "#62618F"} />
            <CustomTitle
              title="Billing"
              className={`text-[${
                billing ? "#1A194D" : "#62618F"
              }] text-sm font-light`}
            />
          </Link>
        </Wrapper>
      </li>
      <li className="flex items-center gap-2">
        <Wrapper
          className={`bg-[${
            apps ? "#EE4D38" : "#F8F8FF"
          }] w-[6px] h-full rounded-xl`}
        />
        <Wrapper
          handleClick={() => {
            setGeneral(false);
            setPassword(false);
            setInvitations(false);
            setBilling(false);
            setApps(!apps);
          }}
          className="w-full basis-[90%] gap-2 flex items-center hover:cursor-pointer"
        >
          <Link to={"/apps"} className="gap-2 flex items-center">
            <Square size={25} color={apps ? "#1A194D" : "#62618F"} />
            <CustomTitle
              title="Apps"
              className={`text-[${
                apps ? "#1A194D" : "#62618F"
              }] text-sm font-light`}
            />
          </Link>
        </Wrapper>
      </li>
    </ul>
  );
};

export default NavigationList;
