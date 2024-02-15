import localFont from "next/font/local";

 const SFMono = localFont({ src: "./SF-Mono/SF-Mono-Light.otf" });
 const Calibre = localFont({src: [
    {
        path: "./calibre/CalibreRegular.otf",
        weight: '400',
        style: 'normal'
    },
    {
        path: "./calibre/CalibreBold.otf",
        weight: '700',
        style: 'normal'
    },
    {
        path: "./calibre/CalibreLight.otf",
        weight: '300',
        style: 'normal'
    },
    {
        path: "./calibre/CalibreMedium.otf",
        weight: '600',
        style: 'normal'
    },

 ] });

export  {SFMono, Calibre}