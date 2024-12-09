import { Be_Vietnam_Pro as Vietnam } from 'next/font/google'
import '@/styles/globals.scss'

const beVietnamPro = Vietnam({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'World Ranks by FlakoBB',
  description: 'A country ranking page where you can find information about each country. This is the solution to a challenge from "devchallenges.io".'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={beVietnamPro.className}>
        {children}
      </body>
    </html>
  )
}
