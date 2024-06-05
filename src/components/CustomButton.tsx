import { CustomButtonProps } from "../types";

const CustomButton = (props: CustomButtonProps) => {
  return (
    <div
      className={
        "text-[#1A194D] border-[1px] border-[#CBCBD9] py-2 px-4 rounded-lg " +
        props.className
      }
      onClick={() => props.onClick()}
    >
      {props.title}
    </div>
  );
};

export default CustomButton;
