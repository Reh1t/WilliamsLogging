import type { NextPage } from "next";
import { useCallback } from "react";

export type SectionType = {
  className?: string;
};

const Section: NextPage<SectionType> = ({ className = "" }) => {
  const onJ6jItUyKXfEsdImageClick = useCallback(() => {
    window.open("https://www.youtube.com/watch?v=j6jItUyKXfE");
  }, []);

  return (
    <section
      className={`self-stretch bg-white overflow-hidden flex flex-row items-start justify-end flex-wrap content-start pt-5 px-10 pb-[19.9px] box-border min-h-[508px] max-w-full text-left text-xl text-black font-inter ${className}`}
    >
      <div className="flex flex-row items-center justify-start gap-5">
        <img
          className="h-[50.7px] w-[50.7px] relative object-cover"
          loading="lazy"
          alt=""
          src="/williams20logo3transparent20bgroundpng@2x.png"
        />
        <a className="[text-decoration:none] relative leading-[32px] font-bold text-[inherit] mq450:text-base mq450:leading-[26px]">
        by Williams Solutions.Pro
        </a>
      </div>
      <div className="w-[1360px] flex flex-row items-start justify-center flex-wrap content-start max-w-full text-45xl text-dark-blue font-dm-sans">
        <div className="flex-1 flex flex-row items-center justify-center flex-wrap content-center gap-x-0 gap-y-[62px] max-w-full mq750:gap-[31px] mq450:gap-[15px]">
          <div className="w-[612px] flex flex-row items-center justify-start max-w-full">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/j6jItUyKXfE?si=4ClOL6bS5e75krlM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[37px] min-w-[335px] max-w-full mq750:gap-[18px]">
            <b className="self-stretch relative leading-[60px] mq450:text-19xl mq450:leading-[36px] mq1050:text-32xl mq1050:leading-[48px]">
              <p className="m-0">{`Welcome to `}</p>
              <p className="m-0">WILLIAMS A.R LOGGING</p>
            </b>
            <div className="self-stretch flex flex-col items-start justify-start text-justify text-base-8 text-gray font-inter">
              <div
                className="self-stretch relative leading-[26px]"
                data-scroll-to="about"
              >
                Welcome to Williams Logging, where we blend traditional logging
                expertise with cutting-edge technology to deliver exceptional
                service. Our commitment to innovation and precision ensures that
                our operations are efficient, reliable, and tailored to meet the
                unique needs of both landowners and businesses.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
