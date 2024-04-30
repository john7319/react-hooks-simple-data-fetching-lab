// create your App component here
import React, {useEffect, useState}from 'react'

export default function App() {
    const [image, setImage] = useState("")
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(newImage => setImage(newImage.message))
    }, [])
    if (!image){
        return <h2>Loading...</h2>
    }
  return (
    <div>
        <img src={image} alt='A Random Dog'/>
    </div>
  )
}

