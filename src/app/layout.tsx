import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./mantineProviders";
import { GeneralContextProvider } from "@/context/generalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "viva presentation platform",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  
  

  return (
    <html lang="en">
      <body className={inter.className}>
          <Providers>
        <GeneralContextProvider>
            {children}
        </GeneralContextProvider>
            </Providers>
      </body>
    </html>
  );
}
