/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          DEFAULT: "rgba(21, 40, 61, 0.7)", // from first file
          100: "#939393",                  // from second file
          200: "#828282",                  // from second file
          300: "#0d0c0c",                  // from second file
          400: "rgba(0, 0, 0, 0.65)",      // from second file
          500: "rgba(0, 0, 0, 0)",         // from second file
        },
        "dark-blue": {
          DEFAULT: "#15283d",              // from first file
          100: "#2c2e47",                  // from second file
        },
        black: {
          DEFAULT: "#000",                 // from first file
          1: "#0b0a04",                    // from second file
        },
        whitesmoke: {
          100: "#f5f6f8",
          200: "#f5f6f7",
        },
        darkslategray: {
          100: "#454545",
          200: "#333",
          300: "#2d2d2d",
          400: "rgba(45, 45, 45, 0.1)",
        },
        gainsboro: {
          100: "#dee2e6",
          200: "#e0e0e0",
          300: "#d3dde7",
        },
        steelblue: "rgba(56, 141, 208, 0.28)",
        mediumslateblue: "#3763f4",
        green: "#388dd0",
        deepskyblue: "#52a6eb",
        royalblue: "#527dff",
        "grey-light-2": "#f8f8f8",
        "grey-1": "#868686",
        "dark-yellow": "#362e00",
        "grey-3": "#dedede",
        "text-default-default": "#1e1e1e",
        "text-default-secondary": "#757575",
        "background-brand-default": "#2c2c2c",
        "text-brand-on-brand": "#f5f5f5",
        "border-neutral-secondary": "#767676",
        "background-neutral-tertiary": "#e3e3e3",
        "text-utilities-text-on-overlay": "#0c0c0d",
        "green-light": "#f0f8ed",
      },
      spacing: {
        "spacing-s": "24px",
        "spacing-xs": "8px",
        "space-1600": "64px",
        "space-600": "24px",
        "space-200": "8px",
        "space-400": "16px",
        "space-300": "12px",
        "space-2001": "8px",
      },
      fontFamily: {
        inter: "Inter",                     // from first file
        "dm-sans": "'DM Sans'",             // from first file
        "small-text": "Inter",              // from second file
        ledger: "Ledger",                   // from second file
        button: "Manrope",                  // from second file
        "form-field": "'DM Sans'",          // from second file
        "header-1": "'Work Sans'",          // from second file
        "m3-title-medium": "Roboto",        // from second file
      },
      borderRadius: {
        xl: "20px",
        "69xl": "88px",
        "13xl": "32px",
        "8xl": "27px",
        "21xl": "40px",
        mid: "17px",
        "17xl": "36px",
        "radius-200": "8px",
      },
    },
    fontSize: {
      "base-8": "15.8px",
      base: "16px",
      "45xl": "64px",
      "19xl": "38px",
      "32xl": "51px",
      xl: "20px",
      lgi: "19px",
      "5xl": "24px",
      sm: "14px",
      "10xl": "29px",
      "13xl": "32px",
      "7xl": "26px",
      xs: "12px",
      lg: "18px",
      "9xl": "28px",
      "3xl": "22px",
      "15xl": "34px",
      "8xl": "27px",
      "53xl": "72px",
      "39xl": "58px",
      "24xl": "43px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
