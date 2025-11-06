import { Noto_Sans, Noto_Sans_Mono, Noto_Serif, Roboto, Roboto_Mono, Roboto_Serif } from 'next/font/google';

const noto_sans = Noto_Sans({
  display: 'swap',
  preload: true,
  style: 'normal',
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext', 'vietnamese', 'devanagari', 'greek', 'greek-ext'],
  variable: '--font-noto-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
const noto_serif = Noto_Serif({
  display: 'swap',
  preload: true,
  style: 'normal',
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext', 'vietnamese', 'math', 'greek', 'greek-ext'],
  variable: '--font-noto-serif',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
const noto_sans_mono = Noto_Sans_Mono({
  display: 'swap',
  preload: true,
  style: 'normal',
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext', 'vietnamese', 'greek', 'greek-ext'],
  variable: '--font-noto-sans-mono',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
const roboto_sans = Roboto({
  display: 'swap',
  preload: true,
  style: 'normal',
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext', 'vietnamese', 'greek', 'greek-ext', 'math', 'symbols'],
  variable: '--font-roboto-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
const roboto_serif = Roboto_Serif({
  display: 'swap',
  preload: true,
  style: 'normal',
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext', 'vietnamese'],
  variable: '--font-roboto-serif',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
const roboto_mono = Roboto_Mono({
  display: 'swap',
  preload: true,
  style: 'normal',
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext', 'vietnamese', 'greek'],
  variable: '--font-roboto-mono',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export const fonts = {
  noto: {
    mono: noto_sans_mono.variable,
    sans: noto_sans.variable,
    serif: noto_serif.variable,
    variable: `${noto_sans.variable} ${noto_serif.variable} ${noto_sans_mono.variable}`,
  },
  roboto: {
    mono: roboto_mono.variable,
    sans: roboto_sans.variable,
    serif: roboto_serif.variable,
    variable: `${roboto_sans.variable} ${roboto_serif.variable} ${roboto_mono.variable}`,
  },
};
