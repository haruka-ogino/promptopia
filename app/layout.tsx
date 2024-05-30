import '@styles/globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Promptopia',
  description: 'Discover & Share AI Promps',
}

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
