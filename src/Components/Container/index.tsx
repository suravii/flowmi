import  { ReactNode } from 'react'
type Props = {
    children: ReactNode
    className?:string
}
const Container = ({children,className}:Props) => {
  return (
    <div className={`container mx-auto max-w-[90rem] lg:px-40 ${className || ''}`}>   {/*this includes the className in container */}
      {children}
      
    </div>
  )
}

export default Container

{/*this is for margin when we zoom out */}