module.exports = {
  purge: {
    enabled: process.env.IS_PRODUCTION,
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/app/**/*.{js,ts,jsx,tsx}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      inter: ["Inter"],
      poppins: ["Poppins"],
    },
    fontSize: {
      caption: ["12px", "16px"],
      body1: ["16px", "22px"],
      body2: ["14px", "20px"],
      bodyTitleSmall: ["18px", "24px"],
      bodyTitleBig: ["24px", "36px"],
      heading3: ["18px", "27px"],
      heading3Big: ["24px", "32px"],
      heading2: ["32px", "42px"],
      heading1: ["40px", "56px"],
      heading1Big: ["48px", "72px"],
      "3xl": ["64px", "98px"],
    },
    colors: {
      orange: {
        dark: "#C53E12",
        DEFAULT: "#F5511C",
        secondary: "#E5D2BA",
        light: "#FFE7CA",
      },
      neutral: {
        dark: "#323232",
        DEFAULT: "#6B7E7D",
        secondary: "#CDCBCB",
        light: "#F3F3F3",
        lighter: "#F9F9F9",
        white: "#FFFFFF",
      },
      blue: {
        DEFAULT: "#1976D2",
        secondary: "#42AFF5",
      },
      red: {
        dark: "#AE0806",
        DEFAULT: "#DA3836",
        light: "#FFF5F2",
      },
      teal: {
        DEFAULT: "#00D1C7",
        dark: "#05A39B",
        secondary: "#76C3C0",
        light: "#C4EFEE",
        lighter: "#EBF8F7",
      },
      typography: {
        DEFAULT: "#000",
        white: "#fff",
        teal: "#00D1C7",
        neutralDark: "#323232",
      },
      brand: {
        DEFAULT: "#00D1C7",
      },
      green: {
        DEFAULT: "#299F5B",
      },
      yellow: {
        DEFAULT: "#FBE852",
      },
      black: {
        gradiant:
          "linear-gradient(90deg, #323232 0%, rgba(50, 50, 50, 0.604885) 62.29%, rgba(50, 50, 50, 0) 100%)",
      },
      white: "#fff",
    },
    extend: {
      boxShadow: {
        bottom:
          "0 0px 3px 0 rgba(0, 0, 0, 0.5), 0 0px 2px 0 rgba(0, 0, 0, 0.2)",
        card: "0px 4px 15px rgba(0, 0, 0, 0.1);",
      },
      borderWidth: {
        5: "5px",
      },
      minWidth: {
        "1/5": "20%",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "23g6": "23.75%",
      },
      width: {
        "1/8": "12.5%",
        "1/5": "20%",
        "23g6": "23.75%",
      },
      margin: {
        18: "4.375rem",
        13: "3.125rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
