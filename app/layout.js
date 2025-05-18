import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SessionWrapper from "./component/SessionWrapper";
import { ReduxProvider } from "@/Redux/provider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "JobIndeed",
  description: "A job portal for anyone looking for a job",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
        <SessionWrapper>
        {children}
        </SessionWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
