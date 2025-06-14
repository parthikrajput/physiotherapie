/** @type {import('tailwindcss').Config} */

const colors = {
  transparent: "transparent",
  current: "currentColor",
  black: {
    DEFAULT: "#000",
    dark: "#010101",
    light: "#0A0A0A99",
    text_light: "#0A0A0AB2",
    normal: "#0A0A0A",
    dark_100: "#535353",
  },
  gray: {
    DEFAULT: "#010101CC",
    light: "#01010166",
    dark: "#0F2420",
    vlight: "#d5d5d5",
    normal: "#333333",
    dark_100: "#757475",
  },
  white: {
    DEFAULT: "#FFFFFF",
    light: "#F3F3F3",
  },
  blue: {
    DEFAULT: "#F3FAFC",
    light: "#F2F9FB",
    vlight: "#2FADE426",
    dark: "#EAF7FC",
    light_100: "#2FADE4",
  },
  red: {
    DEFAULT: "#CD1A1A",
  },
};

module.exports = {
  content: ["*"],
  theme: {
    colors: {
      ...colors,
    },
    screens: {
      xsm: "576px",
      sm: "640px",
      md: "768px",
      smmd: "860px",
      smd: "991px",
      lg: "1024px",
      slg: "1140px",
      xl: "1280px",
      smxl: "1360px",
      sxl: "1440px",
      "2xl": "1540px",
      "2sxl": "1601px",
      "3xl": "1880px",
    },
    extend: {
      fontFamily: {
        ambit_sans: ["Ambit"],
        poppins_sans: ["Poppins"],
      },
      fontSize: {
        0: "0px",
        p: ["18px", { lineHeight: "28px", fontWeight: "400" }],
        body: ["16px", { lineHeight: "24px", fontWeight: "500" }],
        h1: [
          "clamp(1.875rem, 1.7279rem + 0.7353vw, 2.5rem)",
          {
            lineHeight: "clamp(2.875rem, 2.7279rem + 0.7353vw, 3.5rem)",
            fontWeight: "700",
            letterSpacing: "0.03em",
          },
        ],
        h2: [
          "clamp(1.625rem, 1.5221rem + 0.5147vw, 2.0625rem)",
          {
            lineHeight: "clamp(2.3125rem, 2.1654rem + 0.7353vw, 2.9375rem)",
            fontWeight: "700",
            letterSpacing: "0.02em",
          },
        ],
        h3: [
          "clamp(1.375rem, 1.2868rem + 0.4412vw, 1.75rem)",
          {
            fontWeight: "700",
            lineHeight: "clamp(2rem, 1.8529rem + 0.7353vw, 2.625rem)",
          },
        ],
      },
      boxShadow: {
        box_shadow: "0px 4px 24px 0px #00000026",
        faq_shadow: "0px 4px 13px -2px #1310220F",
        faq_active_shadow: "0px 4.8px 24px -6px #1310221A",
        footer_shadow: "0px -5px 34px 0px #0000001A",
        time_line: "4px 4px 50px -6px #0000001F",
        map_shadow: "0px 0px 16px 0px #54615426",
        form_shadow:
          " 0px 4px 13px -2px #1310220F, 0px 4.8px 24.4px -6px #1310221A",
      },
      backgroundImage: {
        li_icon: "url(../img/li_icon.svg)",
        team_icon: "url(../img/team_icon.svg)",
        right_arrow: "url(../img/right_arrow.svg)",
        right_arrow_black: "url(../img/right_arrow_black.svg)",
        left_arrow: "url(../img/left_arrow.svg)",
        left_arrow_black: "url(../img/left_arrow_black.svg)",
        "gradient-text":
          "linear-gradient(313.26deg, rgba(0, 200, 225, 0.9) -51.04%, rgba(0, 104, 255, 0.9) 15.04%, rgba(204, 92, 190, 0.9) 60.52%, rgba(255, 127, 0, 0.9) 104.89%)",
        h1_gradient_text:
          "linear-gradient(319.22deg, rgba(0, 200, 225, 0.9) 3.66%, rgba(0, 104, 255, 0.9) 43.15%, rgba(204, 92, 190, 0.9) 70.33%, rgba(255, 127, 0, 0.9) 96.85%)",
        border_gradient:
          "linear-gradient(41.08deg, rgba(0, 200, 225, 0.9) -7.63%, rgba(0, 104, 255, 0.9) 20.65%, rgba(204, 92, 190, 0.9) 40.11%, rgba(255, 127, 0, 0.9) 59.1%)",
        service_gradient:
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 50.18%, rgba(0, 0, 0, 0.7) 100%)",
        service_box:
          "linear-gradient(313.26deg, #00C8E1 -51.04%, #0098F0 -18%, #0068FF 15.04%, #CC5CBE 60.52%, #FF7F00 104.89%)",
        team_bg:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.07) 0%, rgba(0, 0, 0, 0.7) 100%), url(../img/team.jpg)",
        team_box_bg:
          "linear-gradient(313.26deg, rgba(0, 200, 225, 0.9) -51.04%, rgba(0, 152, 240, 0.9) -18%, rgba(0, 104, 255, 0.9) 15.04%, rgba(204, 92, 190, 0.9) 60.52%, rgba(255, 127, 0, 0.9) 104.89%)",
        social_gradient:
          "linear-gradient(134.47deg, #CC5CBE -64.35%, #FF7F00 194.53%)",
        copy_right:
          "linear-gradient(300.44deg, rgba(0, 200, 225, 0.9) -20.34%, rgba(0, 104, 255, 0.9) 11.16%, rgba(204, 92, 190, 0.9) 60.19%, rgba(255, 127, 0, 0.9) 104.84%)",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "100%",
          "2xl": "1680px",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".hover-border-gradient": {
          "border-image-source":
            "linear-gradient(313.26deg, rgba(0, 200, 225, 0.9) -51.04%, rgba(0, 104, 255, 0.9) 15.04%, rgba(204, 92, 190, 0.9) 60.52%, rgba(255, 127, 0, 0.9) 104.89%)",
          "border-image-slice": "0",
        },
        ".faq_border": {
          "border-image-source":
            "linear-gradient(134.47deg, #CC5CBE -64.35%, #FF7F00 194.53%)",
          "border-image-slice": "2",
        },
        ".gradient-text": {
          "background-clip": "text",
          "text-fill-color": "transparent",
          "background-image":
            "linear-gradient(313.26deg, rgba(0, 200, 225, 0.9) -51.04%, rgba(0, 104, 255, 0.9) 15.04%, rgba(204, 92, 190, 0.9) 60.52%, rgba(255, 127, 0, 0.9) 104.89%)",
        },
        ".bg-clip-unset": {
          "background-clip": "unset",
        },
        ".bg-b-gradient": {
          background:
            "linear-gradient(313.26deg, rgba(0, 200, 225, 0.9) -51.04%, rgba(0, 104, 255, 0.9) 15.04%, rgba(204, 92, 190, 0.9) 60.52%, rgba(255, 127, 0, 0.9) 104.89%) padding-box, linear-gradient(65deg, rgba(0, 200, 225, 0.9) -51.04%, rgba(0, 104, 255, 0.9) 15.04%, rgba(204, 92, 190, 0.9) 60.52%, rgba(255, 127, 0, 0.9) 104.89%) border-box;",
        },
        ".btn-b-box": {
          background:
            "linear-gradient(#fff, #fff) padding-box, linear-gradient(313.26deg, rgba(0, 200, 225, 0.9) -51.04%, rgba(0, 104, 255, 0.9) 15.04%, rgba(204, 92, 190, 0.9) 60.52%, rgba(255, 127, 0, 0.9) 104.89%) border-box;",
          "border-image-slice": "0",
        },
        ".accrodind_border_gradient": {
          background:
            "linear-gradient(#F2F9FB, #F2F9FB) padding-box, linear-gradient(252.38deg, rgba(0, 200, 225, 0.9) -7.04%, rgba(0, 104, 255, 0.9) 39.42%, rgba(204, 92, 190, 0.9) 71.39%, rgba(255, 127, 0, 0.9) 102.59%) border-box;",
          "border-image-source":
            "linear-gradient(313.26deg, rgba(0, 200, 225, 0.9) -51.04%, rgba(0, 104, 255, 0.9) 15.04%, rgba(204, 92, 190, 0.9) 60.52%, rgba(255, 127, 0, 0.9) 104.89%)",
          "border-image-slice": "0",
        },
      });
    },
  ],
};
