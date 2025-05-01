import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import LiveTrainingClasses from "@/components/LiveTrainingClasses"
import NavBar from "@/components/NavBar"
import StudentsCompanyInfo from "@/components/StudentsCompanyInfo"
import StudentFeedback from "@/components/StudentsFeedback"
import TweetLoveSection from "@/components/TweetLoveSection"
import UdemyCourses from "@/components/UdemyCourses"

const Home = () => {
  return (
    <>
    <HeroSection/>
    <TweetLoveSection/>
    <StudentsCompanyInfo/>
    <LiveTrainingClasses/>
    <StudentFeedback/>
    <UdemyCourses/>
    </>
  )
}

export default Home