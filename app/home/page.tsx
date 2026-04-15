
import About from "@/components/About"
import Cta from "@/components/Cta"
import Footer from "@/components/Footer"
import Hero from "@/components/HeroSection"
import Header from "@/components/Nav"
import BlogPage from "../blog/page"
import BooksSection from "@/components/Books"
import ReviewsSection from "@/components/Review"


const HomePage = () => {
  return (
    <div className="bg-white">
      <Header/>
      <Hero/>      
      <About/>
      <BooksSection/>
      <BlogPage/>
      <ReviewsSection/>
      <Cta/>
      <Footer/>
    </div>
  )
}

export default HomePage