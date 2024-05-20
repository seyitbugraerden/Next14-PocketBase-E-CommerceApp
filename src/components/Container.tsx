import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="mx-auto xl:max-w-[1380px] max-w-[90%]">{children}</div>
  );
};

export default Container;
