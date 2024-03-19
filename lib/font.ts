import localFont from "next/font/local";

export const Geliat = localFont({
  src: [
    {
      path: "./font/Geliat-ExtraLight.otf",
      weight: "400",
      style: "normal",
    },

    {
      path: "./font/Geliat-ExtraBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--geliat",
});

export const N27 = localFont({
  src: [
    {
      path: "./font/n27-regular-webfont.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--n27",
});

export const PilatExtended = localFont({
  src: [
    {
      path: "./font/PilatExtended-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/PilatExtended-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--pilat-extended",
});
