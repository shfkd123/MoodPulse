import { extendTheme } from "@chakra-ui/react";
import themeBtn from "./components/button";
import themeInput from "./components/input";
import themeCheckBox from "./components/checkbox";

const theme = extendTheme({
  fonts: {
    body: `'Nanum Pen Script', cursive`,
    heading: `'Noto Sans KR', sans-serif`,
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "30px",
  },
  colors: {
    primary: "#268EFF",
    secondary: "rgba(0, 0, 0, 0.5)",
    dropShadow: "rgba(0, 0, 0, 0.25)",
    disabled: "rgba(0, 0, 0, 0.25)",
    systemRed: "#D70015",
  },
  components: {
    Button: themeBtn,
    Input: themeInput,
    Checkbox: themeCheckBox,
  },
});

export default theme;
