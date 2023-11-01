/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cardColor: "#ffffff",
        cardBorder: "#e6e6e6",
        dark: "#212121",
        white: "#fafafa",
        error: "#d86161",
        placeholder: "#7a7a7a",
        primary: "#1597e4",
        radioBorder: "#D8D8D8",
      },
      height: {
        formHeight: "564px",
        radioHeight: "20px",
      },
      width: {
        formWidth: "577px",
        radioWidth: "20px",
      },
      borderRadius: {
        formBorderRadius: "10px",
        formInputBorderRadius: "5px",
        buttonRadius: "6px",
      },
      padding: {
        formPadding: "32px",
        formInputPadding: "8px 12px",
        buttonPadding: "8px 16px",
      },
      gap: {
        formGap: "24px",
        labelInputGap: "4px",
        formInputsGap: "24px",
        radioGap: "16px",
        radioInputGap: "4px",
      },
      fontSize: {
        formHeading: "20px",
        pageNumber: "16px",
        formInputLabel: "14px",
        formInput: "14px",
        buttonFont: "16px",
        radioFont: "14px",
      },
      fontWeight: {
        pageNumber: "500",
        formInputLabelWeight: "500",
        buttonWeight: "500",
      },
    },
  },
  plugins: [],
};
