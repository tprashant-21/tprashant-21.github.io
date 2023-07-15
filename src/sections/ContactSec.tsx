import Footer from "../components/Footer"

const ContactSec = () => {
  return (
    <div className="h-screen relative flex overflow-hidden justify-center items-end text-8xl bg-[#a08241]">
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
        <div>
        
        </div>

        <Footer />
    </div>
  )
}

export default ContactSec