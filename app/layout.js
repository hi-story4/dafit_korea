import "./globals.css";

import Footer from "./components/Footer";

export const metadata = {
  title: "다핏",
  description: "Landing page for the Fitness applications '다핏'",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
