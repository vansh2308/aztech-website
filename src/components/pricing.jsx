import { RiCheckboxCircleFill } from "react-icons/ri";
const gigs = [
  {
    "price": "270",
    "type": "Basic",
    "content": "All the plans exclude the price of domain for deployment",
    "features": [
      "Frontend Applications",
      "Single page web-app",
      "Simple & Elegant",
      "1 minor revision"
    ]
  },
  {
    "price": "600",
    "type": "Standard",
    "color": "invert",
    "content": "A multi-page, animated / ML integrated website having user engaging 3D graphics.",
    "features": [
      "Multi page web-app",
      "Intriguing Frontend ",
      "Attrative illustrations",
      "Analytics Dashboard",
      "2 minor revisions"
    ]
  },
  {
    "price": "900",
    "type": "Pro",
    "content": "A multi-page, animated / ML integrated website having user engaging 3D graphics. ",
    "features": [
      "Multi page web-app",
      "Frontend + Backend",
      "3D illustrations",
      "ML integrated",
      "Animations",
      "Payment Gateways",
      "2 revisions"
    ]
  },
]


export default function PricingSection() {
  return (
    <section className="w-screen px-20 min-h-screen py-7 h-fit flex flex-col text-purple-300 gap-5 max-[850px]:p-5">
      <h1 className="w-full text-[2.5rem] font-medium text-center mb-4 max-[850px]:text-2xl max-[850px]:mb-2"> PRICING </h1>
      <p className="max-[850px]:text-center  max-[850px]:w-full max-[850px]:text-xs ">All the plans exclude the price of domain for deployment.</p>
      <div className="w-full min-h-fit flex gap-10 flex-grow justify-between max-[850px]:flex-col max-[850px]:gap-5">
        {
          gigs.map((item, key) => {
            return (
              <PriceTile key={key} item={item} />
            )
          })
        }
      </div>

      <div className="w-full min-h-fit flex gap-10 flex-grow justify-between mb-10 max-[850px]:justify-center">
        <div className="px-16 w-1/3  max-[850px]:hidden" />
        <button className="w-1/3 py-6 text-sm rounded-xl font-medium my-10 bg-purple-300 text-white button-shadow max-[850px]:px-3 max-[850px]:w-2/3 max-[850px]:py-5">
          Schedule Meet
        </button>
        <div className="px-16 w-1/3 max-[850px]:hidden" />
      </div>

    </section>
  )
}


function PriceTile(props) {
  return (
    <div className="h-[inherit] w-1/3 min-h-fit bg-white rounded-[15px] border-2 border-purple-300 py-10 gap-4 px-10 flex flex-col max-[850px]:w-full max-[850px]:p-5"
      style={
        props.item.color == "invert" ? {
          backgroundColor: "#44458C",
          color: "#fff",
        } : {}
      }
    >
      <span className="text-[2.5rem] max-[850px]:text-[2rem]">$ {props.item.price}</span>
      <span className="font-bold text-[1.5rem] max-[850px]:text-xl">{props.item.type}</span>
      <p className="max-[850px]:text-sm"> {props.item.content}  </p>
      {
        props.item.features.map((feature, key) => {
          return (
            <li className="flex gap-3 items-center max-[850px]:text-sm">
              <RiCheckboxCircleFill />
              {feature}
            </li>
          )
        })
      }

    </div>
  )
}



