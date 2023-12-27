
import './globals.css'

export const metadata = {
  title: '다핏',
  description: "Landing page for the Fitness applications '다핏'",
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  )
}
