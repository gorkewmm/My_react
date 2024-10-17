import React from 'react'

const Container = ({children}) => {
   console.log(children)
  return (
    <div>
        <div>Container compenenti çalıştı</div>
        {children}
        
    </div>
  )
}

export default Container