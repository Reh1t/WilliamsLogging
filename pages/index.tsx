import type { NextPage } from "next";
import { useCallback, useEffect } from "react";
import Header1 from "../components/header1";
import Footer1 from "../components/footer1";
import Section from "../components/section";

const WillaimsLogging: NextPage = () => {

  useEffect(() => {
    // Load the script
    const script = document.createElement("script");
    script.src = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
    script.setAttribute("clienthub_id", "c6ab68fa-74c2-4d46-9066-ff2210b88264");
    script.setAttribute("form_url", "https://clienthub.getjobber.com/client_hubs/c6ab68fa-74c2-4d46-9066-ff2210b88264/public/work_request/embedded_work_request_form");
    document.body.appendChild(script);

    script.onload = () => {
      // Apply Tailwind CSS classes to the embedded form elements once the script is loaded
      const form = document.getElementById("c6ab68fa-74c2-4d46-9066-ff2210b88264");

      if (form) {
        form.classList.add("bg-white", "p-6", "rounded-lg", "shadow-md", "max-w-lg", "mx-auto", "my-8");

        const inputs = form.querySelectorAll("input, textarea, select");
        inputs.forEach((input) => {
          input.classList.add(
            "w-full",
            "px-4",
            "py-2",
            "mb-4",
            "border",
            "border-gray-300",
            "rounded",
            "focus:outline-none",
            "focus:ring-2",
            "focus:ring-blue-500"
          );
        });

        const labels = form.querySelectorAll("label");
        labels.forEach((label) => {
          label.classList.add("block", "text-sm", "font-medium", "text-gray-700", "mb-2");
        });

        const buttons = form.querySelectorAll("button");
        buttons.forEach((button) => {
          button.classList.add(
            "bg-blue-500",
            "text-white",
            "px-4",
            "py-2",
            "rounded",
            "hover:bg-blue-600",
            "focus:outline-none",
            "focus:ring-2",
            "focus:ring-blue-500"
          );
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start leading-[normal] tracking-[normal]">
      <Header1 />
      <Section />
      <section className="self-stretch bg-white overflow-hidden flex flex-row items-start justify-end flex-wrap content-start py-5 px-10 box-border max-w-full text-center text-45xl text-dark-blue font-dm-sans">
        <div className="flex-1 flex flex-row items-start justify-center flex-wrap content-start max-w-full">
          <div className="flex-1 flex flex-col items-center justify-center gap-6 max-w-full">
            <div className="self-stretch flex flex-col items-center justify-start gap-[37px] max-w-full mq750:gap-[18px]">
              <b className="self-stretch relative leading-[60px] mq450:text-19xl mq450:leading-[36px] mq1050:text-32xl mq1050:leading-[48px]">
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
      <div id="c6ab68fa-74c2-4d46-9066-ff2210b88264"></div>

      <Footer1 />
    </div>
  );
};

export default WillaimsLogging;
