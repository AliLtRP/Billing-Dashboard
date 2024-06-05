import React from "react";

const Wrapper: React.FC<{
  children?: React.ReactNode;
  className?: string;
  handleClick?: () => void;
}> = ({ children, className, handleClick }) => {
  return (
    <div className={className} onClick={() => handleClick!()}>
      {children}
    </div>
  );
};

export default Wrapper;
