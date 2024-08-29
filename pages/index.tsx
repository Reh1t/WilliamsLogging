import type { NextPage } from "next";
import { useCallback, useEffect } from "react";
import Header1 from "../components/header1";
import Footer1 from "../components/footer1";
import Section from "../components/section";
import router from "next/router";

const WillaimsLogging: NextPage = () => {

  const onContactButtonClick = useCallback(() => {
    router.push(
      "https://clienthub.getjobber.com/client_hubs/c6ab68fa-74c2-4d46-9066-ff2210b88264/public/work_request/new?source=social_media"
    );
  }, [router]);


  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start leading-[normal] tracking-[normal]">
      <Header1 />
      <Section />
      <section className="self-stretch bg-white overflow-hidden flex flex-row items-start justify-end flex-wrap content-start py-5 px-10 box-border max-w-full text-center text-45xl text-dark-blue font-dm-sans">
        <div className="flex-1 flex flex-row items-start justify-center flex-wrap content-start max-w-full">
          <div className="flex-1 flex flex-col items-center justify-center gap-6 max-w-full">
            <div className="self-stretch flex flex-col items-center justify-start gap-[37px] max-w-full mq750:gap-[18px]">
              <b className="self-stretch relative leading-[60px] mq450:text-19xl mq450:leading-[36px] mq1050:text-32xl mq1050:leading-[48px]" data-scroll-to="service">
                Services
              </b>
              <div className="w-[856px] flex flex-col items-start justify-start max-w-full text-base-8 text-gray font-inter">
                <div className="self-stretch relative leading-[26px]">
                  Williams Logging uses advanced technology, like the Integrated
                  Base Control (IBC) system, to make our logging operations
                  faster and more precise. This system helps our machines run
                  more smoothly and reduces strain on the operators. Even if an
                  operator is less experienced, our technology helps them
                  perform at a high level. We focus on delivering efficient and
                  reliable logging services that meet the needs of both
                  landowners and businesses.
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[52px] max-w-full lg:flex-wrap mq750:gap-[26px]">
              <div className="flex-1 flex flex-row items-center justify-start min-w-[425px] max-w-full mq750:min-w-full">
                <img
                  className="h-[559px] flex-1 relative max-w-full overflow-hidden object-cover  "
                  loading="lazy"
                  alt=""
                  src="/williams-logging-2@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-row items-center justify-start min-w-[425px] max-w-full mq750:min-w-full">
                <img
                  className="h-[559px] flex-1 relative max-w-full overflow-hidden object-coverr"
                  loading="lazy"
                  alt=""
                  src="/williams-logging-01@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch bg-ghostwhite flex flex-col items-center justify-center max-w-full text-left text-37xl text-black font-heading-1">
        <div className="self-stretch overflow-hidden flex flex-row items-start justify-center flex-wrap content-start py-[52px] px-5 box-border max-w-full">
          <div className="w-[1140px] flex flex-row items-center justify-start flex-wrap content-center py-0 pl-0 pr-[390px] box-border gap-x-10 gap-y-9 max-w-full lg:pr-[195px] lg:box-border mq450:pr-5 mq450:box-border mq750:gap-[18px] mq750:pr-[97px] mq750:box-border">
            <div className="h-px flex-1 relative border-lavender border-t-[1px] border-solid box-border min-w-[163px] max-w-full" />
            <h1 className="m-0 relative text-39xl leading-[120%] font-bold font-[inherit] mq450:text-[34px] mq450:leading-[40px] mq1050:text-[45px] mq1050:leading-[54px]">
              Contact Us
            </h1>
          </div>
        </div>
        <button
          className="cursor-pointer py-10 px-10 ml-10 mb-10 bg-green shadow-[0px_8px_16px_rgba(55,_99,_244,_0.15)] rounded-13xl flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-mediumslateblue hover:bg-deepskyblue hover:box-border hover:border-[1px] hover:border-solid hover:border-royalblue"
          onClick={onContactButtonClick}
        >
          <a className="relative text-8xl leading-[25.6px] font-bold font-small-text text-white text-center">
            Contact Us Here
          </a>
        </button>
      </section>

      <Footer1 />
    </div>
  );
};

export default WillaimsLogging;
