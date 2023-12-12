import React from "react";

const SectionHeaders = ({ subHeader, mainHeader }) => {
  return (
    <>
      <h3 className="font-semibold leading-4 text-gray-500 uppercase">
        {subHeader}
      </h3>
      <h2 className="text-4xl italic font-bold text-primary">{mainHeader}</h2>
    </>
  );
};

export default SectionHeaders;
