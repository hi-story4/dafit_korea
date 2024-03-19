import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/Footer";

export const metadata = {
  title: "다핏",
  description: "Landing page for the Fitness applications '다핏'",
};

export default function Layout({ children }) {
  return (
    <html lang="ko">
      <body>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
