import { useState } from 'react'

const Accordion = ({title, body}) => {
  const [accordion, setAccordion] = useState(false)

  const handleAccordion = () => {
    setAccordion(!accordion)
  }
  return(
    <div className="rounded-md cursor-pointer">
      <div className={`px-[30px] py-[20px] flex justify-between  ${accordion ? 'bg-primary' : ''} border-b-1 rounded-t-md`}  onClick={handleAccordion}>
        <h3 className={`text-lg font-semibold text-dark ${accordion ? 'text-white' : ''}`}>{title}</h3>
        <button>
          {accordion ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M6.96875 15L12.9688 9L18.9688 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 9L12 15L18 9" stroke="#0C1B4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          )}

        </button>
      </div>
      {accordion ? (
        <div className="px-[30px] py-[20px] bg-primary rounded-b-md">
          <p className="text-white">{body}</p>
        </div>
      ) : (
        <></>
      )}

    </div>
  )
}

export default Accordion