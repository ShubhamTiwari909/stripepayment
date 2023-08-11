import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="synthwave">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
