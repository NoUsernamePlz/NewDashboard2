import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <div className=" w-[100vw] h-[4vh] py-2 text-3xs text-steelblue-100  bg-blueish-black uppercase flex items-center justify-between mt-3 sticky bottom-0 z-200">
      <b className="text-left pl-8 ">
        Orion data visualisation
      </b>

      <b className=" text-right pr-8">
        2019
      </b>
    </div>
  );
};

export default Footer;
