import { CustomTitleProps } from "../types";

const CustomTitle = (props: CustomTitleProps) => {
  return <p className={props.className}>{props.title}</p>;
};

export default CustomTitle;
