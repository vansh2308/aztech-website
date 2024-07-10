import formImg from "./../assets/formImg.png"

export default function FormSection() {
  
  return (
    <section className="w-screen h-fit pt-20 relative">
      <div className="flex w-full px-40 h-fit text-purple-300 justify-between max-[850px]:flex-col max-[850px]:p-10">
        <p className="w-[40%] text-[3.2rem] max-[850px]:w-full max-[850px]:text-lg max-[850px]:text-center">
          Feel free to fill up your details, we will reach out to you asap
        </p>

        <form className="flex-grow ml-32 pt-6 flex flex-col gap-8 max-[850px]:m-0 contact-form">
          <input type="text" placeholder="Name" className="w-full py-2 " />
          <input type="text" placeholder="Whatsapp No." className="w-full py-2 " />
          <input type="text" placeholder="Email Address" className="w-full py-2 " />

          <button type="submit">
            <button className="w-[80%] py-6 text-sm rounded-lg mt-14 bg-purple-300 text-white button-shadow max-[850px]:mt-5 max-[850px]:p-5">
              Let's schedule a meet !
            </button>
          </button>

        </form>
      </div>

      <img src={formImg} className="w-full left-0 mt-20 " />

    </section>
  )
}