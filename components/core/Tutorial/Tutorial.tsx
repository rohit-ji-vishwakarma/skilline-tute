import React from 'react'
type TutorialProps = {
    title: string;
}

export const Tutorial = ({title}:TutorialProps) => {
  return (
      <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
          <div className="w-8 h-8 flex items-center justify-center  rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="text-black">
                  <path d="M19 3h-3.586l-1-1H8.586l-1 1H5c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2V5c0-1.104-.896-2-2-2zM7 2h8l1 1h3c.553 0 1 .447 1 1v16c0 .553-.447 1-1 1H5c-.553 0-1-.447-1-1V5c0-.553.447-1 1-1h2V2z" />
              </svg>
          </div>
          <span className="font-bold text-xl pl-4">{title}</span>
      </div>
  )
}
