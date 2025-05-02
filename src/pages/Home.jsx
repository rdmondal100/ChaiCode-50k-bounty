import AlumniNetwork from "@/components/AlumniNetwork"
import BenefitsOfCohorts from "@/components/BenefitsOfCohorts"
import CommunitySection from "@/components/CommunitySection"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import LiveTrainingClasses from "@/components/LiveTrainingClasses"
import NavBar from "@/components/NavBar"
import StudentsCompanyInfo from "@/components/StudentsCompanyInfo"
import StudentFeedback from "@/components/StudentsFeedback"
import TopicsCloud from "@/components/TopicsCloud"
import TweetLoveSection from "@/components/TweetLoveSection"
import UdemyCourses from "@/components/UdemyCourses"
import WhyChaiCode from "@/components/WhyChaiCode"

const Home = () => {
  return (
    <>
    <HeroSection/>
    <TweetLoveSection/>
    <StudentsCompanyInfo/>
    <LiveTrainingClasses/>
    <StudentFeedback/>
    <UdemyCourses/>
    <BenefitsOfCohorts/>
    <AlumniNetwork/>
    <WhyChaiCode/>
    <TopicsCloud/>
    <CommunitySection/>
    </>
  )
}

export default Home