import React from 'react'
import "./Diary.scss";

const NotFound = () => {
  return (
    <div>
        <div className='circle'></div> {/* Circle as fixed background */}
        <div className='rectangle'></div>
        <div style={{"margin": "200px", "fontSize": "50px", "fontWeight": "bold", "color": "#5AB2FF"}}>Page Not Found</div>
    </div>
  )
}

export default NotFound
