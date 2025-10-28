import react , {useEffect , useState} from "react"
import BotCollection from "./BotCollection"
// first we want to get the data in app since we will use it on our children componenets to print out the bots and there status

function App (){
  const [bots , setBots] = useState([])
  // since we expect an array containing objects that we will use as data to run our components

  // we use useEffect to bring in the api cause its outside our appilication in short a side effect 
  
  useEffect(()=>(
    fetch("http://localhost:8001/bots")
    .then(res => res.json)
    .then((data) => {
      console.log("bot data fetched :" , data)
      setBots(data)
    })
  ))
}
