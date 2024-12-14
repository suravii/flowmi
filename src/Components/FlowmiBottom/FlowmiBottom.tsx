
import Container from "../../Components/Container";
import iconsbottom from "../../assets/images/iconsbottom.svg";

const FlowmiBottom = () => {
  return (
    <section className="bg-[#1E209A]">
      <Container>
      <footer className="bg-[#1E209A]-blue-900 text-white py-10 px-40 max-sm:px-6">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4 max-sm:text-[20px]">FLOWMI AI</h2>
        <p className="text-xs md:text-sm mb-6 max-sm:text-[8px]">
        Your smart traffic commute assistant, designed to save you time, reduce stress, and transform your daily journey. FLOWMI predicts traffic patterns, offers real-time updates, and personalizes your routes based on current conditions. Whether you're heading to work, running errands, or planning your day, FLOWMI ensures you arrive faster, safer, and more efficiently.
        </p>
        <div className="flex justify-center space-x-6">
          <img src={iconsbottom} alt="icons" className="h-8 "/>
          
        </div>
      </div>
    </footer>
      </Container>
    </section>
  )
}

export default FlowmiBottom
