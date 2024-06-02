import React from 'react'

function ScrollItem({border,bg,children}) {
  return (
    <div className={`ev-services-scroll-item px-2 w-fit 
    flex gap-1 items-center
    text-sm py-1 rounded-full 
     border-ev-black-lighter text-ev-black-lighter 
     ${border ? "border border-1 border-purple-deep" : ""}
     ${bg ? bg : ""}
    `}>
       {children} 
    </div>
  )
}

export default ScrollItem