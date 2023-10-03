/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        'xs':'250px',
      },
      colors: {
        steelblue: {
          "100": "#9292c1",
          "200": "#5a5a89",
        },
        "blueish-black": "#191932",
        white: "#fff",
        mediumslateblue: "#3247e5",
        black: "#05050f",
        "electric-green": "#5eff5a",
        "purple-blue": "#6a6a9f",
        royalblue: "#176bf8",
        gray: "#16162b",
        darkslateblue: "#3d3d60",
        black1: "#000",
      },
      spacing: {},
      fontFamily: {
        "mainfont": "'Open Sans'",
        mulish: "Mulish",
        poppins: "Poppins",
        archivo: "Archivo",
      },
      borderRadius: {
        "3xs": "10px",
        "81xl": "100px",
      },
    },
    fontSize: {
      "3xs": "9px",
      "41xl": "32px",
      smi: "13px",
      base: "16px",
      xs: "11px",
      sm: "13px",
      xl: "20px",
      "2xs-1": "10.1px",
      lgi: "19px",
      "xl-5": "20.5px",
      "53xl": "62px",
      "15xl": "23px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};


