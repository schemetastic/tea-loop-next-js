import { Poppins } from "next/font/google";
import "./globals.css";

import { DevCycleClientsideProvider } from '@devcycle/nextjs-sdk'
import { getClientContext } from './devcycle'


import { Footer } from "./components/footer";
import { ShoppingCartModal } from "./components/shopping-cart-modal";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  display: "swap",
  variable: "--main-font"
});

export const metadata = {
  title: "Tea Loop",
  description: "Tea Loop demo project",
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      url: '/favicon.png',
    },
  ]
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={poppins.className}>
        <DevCycleClientsideProvider
          context={getClientContext()}
        >
          {children}
        </DevCycleClientsideProvider>

        <Footer />
        <ShoppingCartModal />
      </body>
    </html>
  );
}
