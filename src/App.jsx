import { useEffect, useState } from "react"

const Card = ({ title }) => {
  const [count, setCount] =useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`The movie "${title}" has been liked: ${hasLiked}`);
  }, [hasLiked]);

  useEffect(() => {
    console.log('CARD RENDERED');
  }, [])

  return(
    <div className="card" onClick={() => setCount((prevState) => prevState +1)}>
      <h2>{title} <br /> {count || null} </h2>

      <button onClick={() => setHasLiked((prevState) => !prevState)}>
        {hasLiked ? "Liked ❤️" : "Like this movie 🤍"}
      </button>
    </div>
  )
}

const App = () => {
  
  return (
    <div className="card-container">
      <Card title="First Movie" />
      <Card title="Second Movie" />
      <Card title="Third Movie" />
     
    </div>  
  )
}
export default App
