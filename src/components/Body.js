import React from 'react'

function Body({ fetchedData }) {
    const handleClick = () => {
        window.location.reload();
    }
   
    return (
        <div className="body">
            <div className="body_quote">
                <p>"{fetchedData.quote}"</p>
            </div>
            <div className="body_author">
                <p>{fetchedData.author}</p>
            </div>
            <div className="body_btn">
                <button onClick={handleClick} >Click me</button>
            </div>
            
        </div>
    )
}

export default Body
