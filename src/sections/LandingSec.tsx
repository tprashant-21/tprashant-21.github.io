import Header from "../components/Header"
import LandingSection from "../components/LandingSection"


const LandingSec = () => {


  return (
    <div
     className="relative min-h-[calc(screen-150px)] overflow-hidden bg-[#a08241]">
      <svg className="absolute opacity-90" viewBox='0 0 1550 4000' >
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