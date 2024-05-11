import heading from "./assets/heading.png"
import qr from "./assets/qr.png"


function App() {
  return (
    <div className="bg-teal-500 flex gap-[10%] flex-col justify-center items-center w-screen h-screen text-white font-semibold text-[2.5rem] app ">
      <img src={heading} className="md:w-1/2"/>
      <img src={qr} className="md:w-1/4 w-[70%]" />
    </div>
  )
}

export default App
