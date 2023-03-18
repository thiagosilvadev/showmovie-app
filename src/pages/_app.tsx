import type { AppProps } from "next/app"
import { Raleway as FontSans, Poppins as FontSecondary, Inter as FontAuxiliar } from "next/font/google"
import { ThemeProvider } from "next-themes"

import "@/styles/globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})
const fondSecondary = FontSecondary({
  subsets: ["latin"],
  variable: "--font-secondary",
  weight: ['300','400', '500', '600', '700'],
  display: "swap",
})
const fontAuxiliar = FontAuxiliar({
  subsets: ["latin"],
  variable: "--font-auxiliar",
  display: "swap",
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
				:root {
					--font-sans: ${fontSans.style.fontFamily};
					--font-secondary: ${fondSecondary.style.fontFamily};
					--font-auxiliar: ${fontAuxiliar.style.fontFamily};
				}
			`}</style>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
