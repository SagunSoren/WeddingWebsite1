// fonts.js
import { Cormorant_Garamond } from 'next/font/google';


export const cormorant_garamod = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const cormorant_garamod_italic = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  style:["italic"]
});

