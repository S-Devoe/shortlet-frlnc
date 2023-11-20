import React from "react";

interface Props {
  header: string;
}
const PageHeader = ({ header }: Props) => {
  return (
    <h1 className="font-fraunces text-primary text-[1.5rem] leading-[175%] font-[600]">
      {header}
    </h1>
  );
};

export default PageHeader;
