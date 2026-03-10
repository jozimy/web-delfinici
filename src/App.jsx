import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Sports from './components/Sports'
import Members from './components/Members'
import History from './components/History'
import Join from './components/Join'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Sports />
        <Members />
        <History />
        <Join />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
