import React from "react";

const Wrapper: React.FC<{ children?: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <div className={className}>{children}</div>;
};

export default Wrapper;
