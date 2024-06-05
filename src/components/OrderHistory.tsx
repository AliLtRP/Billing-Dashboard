import CustomTitle from "./CustomTitle";
import Wrapper from "./Wrapper";

const OrderHistory = () => {
  return (
    <Wrapper className="w-full  flex flex-col gap-1">
      <CustomTitle title="Order History" className="font-bold text-[#1A194D]" />
      <CustomTitle
        title="Manage billing information and view receips"
        className="text-[#62618F] text-sm"
      />
    </Wrapper>
  );
};

export default OrderHistory;
