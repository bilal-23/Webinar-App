import { Inter } from "next/font/google"
import Head from "next/head"

import { FilterDropdown } from "@/components/FilterDropdown"
import { Header } from "@/components/Header"
import { Search } from "@/components/Search"
import { Container } from "@/components/WebinarSection/Container"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Webinar App</title>
      </Head>
      <div
        className={`max-w-screen-[1296px] mx-auto flex h-lvh min-h-screen flex-col items-center overflow-hidden bg-white px-4 py-6 lg:pl-[46px] ${inter.className}`}
      >
        <div className="size-full">
          <Header />
          <main>
            <div className="mt-6 flex w-full flex-col items-center justify-center sm:flex-row sm:justify-between sm:pr-[56px]">
              <Search />
              <FilterDropdown />
            </div>
            <Container />
          </main>
        </div>
      </div>
    </>
  )
}
