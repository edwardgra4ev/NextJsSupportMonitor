import NavigationBar from '@/components/NavigationBar'
import './globals.css'
import { Inter } from 'next/font/google'
import 'primeicons/primeicons.css';
import "primereact/resources/themes/bootstrap4-dark-purple/theme.css";  
import "primereact/resources/primereact.min.css"; 


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Монитор поддержки',
  description: 'Монитор отдела поддержки приложений',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <NavigationBar />
        <main className='container'>{children}</main>
      </body>
    </html>
  )
}
