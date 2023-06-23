import Header from "../components/Header"
import LandingSection from "../components/LandingSection"


const LandingSec = () => {
  return (
    <div className="relative max-h-screen overflow-hidden  bg-[#a28a57]">
      <svg className=" absolute opacity-90 top-0 left-0" viewBox='0 0 1550 920' >
            <filter id='noiseFilter'>
                <feTurbulence 
                type='fractalNoise' 
                baseFrequency='0.85' 
                numOctaves='5' 
                stitchTiles='stitch'/>
            </filter>
        
            <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
        </svg>
      <Header />
      <LandingSection />
    </div>
  )
}

export default LandingSec