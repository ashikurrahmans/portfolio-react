module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satisfy: ["Satisfy", "cursive"],
        josefin: ["Josefin Sans", "Arial"],
      },
      backgroundImage: (theme) => ({
        bgImage:
          "url('https://steamuserimages-a.akamaihd.net/ugc/1003681674393214777/13DC89D277D745D3438BEE36B5B61DFDAB9E4A70/')",
      }),
    },
  },
  plugins: [require("daisyui")],
};
