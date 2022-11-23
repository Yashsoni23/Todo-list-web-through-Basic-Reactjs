import React from 'react'

export const Footer = () => {
     let footerStyle = {
        position: "relative",
        // top: '90vh',
        bottom: 0,
        width: '100%',
        marginTop: '2rem'
      }
  return (
    <footer className='bg-info  text-light py-2' style={footerStyle}>
    <p className="text-center link-info">
        CopyRight &copy; <a href="http://savetodowithyash.netlify.app" className="" style={{color:"#fff",fontSize:"1.2rem"}}>SaveTodoWithYash.com</a>
    </p>
    </footer>
  )
}
