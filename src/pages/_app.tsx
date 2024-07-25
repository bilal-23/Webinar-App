import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import { AnimatePresence, motion } from "framer-motion"
import { Toaster } from "sonner"

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <>
      <Toaster richColors />
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{ duration: 0.75 }}
          variants={{
            initialState: {
              opacity: 0,
              clipPath: "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)",
            },
            animateState: {
              opacity: 1,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            exitState: {
              opacity: 0,
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            },
          }}
          className="size-full flex-1"
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  )
}
