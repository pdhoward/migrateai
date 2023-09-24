
import "@/styles/globals.css";
import React from 'react'
import { cal, inter } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import type { AppProps } from 'next/app'


interface LayoutProps {
  children: React.ReactNode
}
const Layout = ({ children }: LayoutProps) => (
  <div className={cn('bg-black text-white', cal.variable, inter.variable)}>{children}</div>
)
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
