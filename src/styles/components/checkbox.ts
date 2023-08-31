const themeCheckBox = {
  variants: {
    primary: {
      _checked: { color: "white", backgroundColor: "#268EFF" },
      control: {
        borderRadius: "2px",
        borderColor: "rgba(0, 0, 0, 0.5)",
        bgColor: "red",
      },
    },
    black: {
      borderRadius: "2px",
      borderColor: "rgba(0, 0, 0, 0.5)",
      colorScheme: "none",
      _checked: { color: "white", backgroundColor: "black" },
    },
  },
  defaultProps: {},
};
export default themeCheckBox;
