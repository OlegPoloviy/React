import {Header,Footer} from "./semantic";
import {AllUser} from "./constants";
import './App.css'

function App() {

  return (
    <div>
        <Header/>
        <AllUser/>
        <Footer foot={'Site is working'}/>
    </div>
  )
}

export default App
