import '@/styles/globals.css';

import { Suspense } from "react"
import Nav from '@/components/Nav'
import Provider from '@/components/Provider'

export const metadata = {
    title: 'Promptopia',
    description: 'Discover & Share AI Promopts'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <Provider>
                <div className="main">
                    <div className="gradient" />
                </div>

                <main className='app'>
                    <Nav />
                    <Suspense>
                        {children}
                    </Suspense>
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout
