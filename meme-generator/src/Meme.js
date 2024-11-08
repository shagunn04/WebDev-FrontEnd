import React ,{useEffect,useState} from "react"
import "./Style.css"
import axios from 'axios'

function Meme()
{
    const [url,setUrl]=useState("");
    const [error, setError] = useState(null);
    const [memes, setMemes] = useState([]); 
    const [uppertext,setuppertext]=useState("");
    const [lowertext,setlowertext]=useState("");
     
    function handleClick(e) {
        e.preventDefault();
        if (memes.length > 0) {
          const randomIndex = Math.floor(Math.random() * memes.length);
          setUrl(memes[randomIndex].url); 
        }
      }
    useEffect(()=>{
      const fetchMemes= async()=>{
        try{
            const response = await axios.get("https://api.imgflip.com/get_memes");
            const memesList = response.data.data.memes;
            setMemes(memesList); 
            if (memesList.length > 0) {
                setUrl(memesList[0].url); 
              }
        }
        catch(err)
        {
           setError(err.message);
           console.log(error)
        }
      };

      fetchMemes();},
      []);
    
     
    
    return(
        <div className="Meme">
                <div className="input-text">
                    <label htmlFor="upper-text"></label>
                    <input 
                    type="text" id="upper-text" placeholder="Enter upper text here" 
                    value={uppertext}
                    onChange={(e)=>setuppertext(e.target.value)}></input>


                    <label htmlFor="lower-text"></label>
                    <input 
                    type="text" id="lower-text"  placeholder="Enter lower text here"
                    value={lowertext}
                    onChange={(e)=>setlowertext(e.target.value)}></input>
                </div>


                <div className="Button">
                    <button onClick={handleClick}> Create a new meme </button>
                </div>

                <div className="Upper">{uppertext}</div>
                <div className="Meme-Image">
                    <img src={url} alt="Meme-image"></img>
                </div>
                <div className="Lower">{lowertext}</div>

        </div>
    )
}

export default Meme