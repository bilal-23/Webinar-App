import { Inter } from "next/font/google"
import Head from "next/head"

import { FilterDropdown } from "@/components/FilterDropdown"
import { Header } from "@/components/Header"
import { Search } from "@/components/Search"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Webinar App</title>
      </Head>
      <main
        className={`max-w-screen-[1296px] mx-auto flex min-h-screen flex-col items-center bg-white py-6 pl-[46px] ${inter.className}`}
      >
        <Header />
        <div className="mt-6 flex w-full items-center justify-between pr-[56px]">
          <Search />
          <FilterDropdown />
        </div>
      </main>
    </>
  )
}
