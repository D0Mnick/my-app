import { BrowserRouter as Router, Route, Routes , NavLink } from "react-router-dom"
import Card from "./components/shared/Card"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage"
import AboutIconLink from "./components/AboutIconLink"
import Post from "./components/Post"
import { FaRainbow } from "react-icons/fa"
import { FeedbackProvider } from "./context/FeedbackContext"


function App() {
  // this is state

  return (
    <FeedbackProvider>
          <Router>
        <Header />
        <div className="container">

        <Card>
      
          <div className="navlinks">
            <NavLink to= '/' activeClassName='active'>
            < FaRainbow size={20} />
              Home
            </NavLink>
            <NavLink to= '/about' activeClassName='active'>
              About
            </NavLink>
            </div>
          </Card>  
          
          <Routes>
            <Route exact path="/" element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                {/* accss to feedbacklist */}
                <FeedbackList />

              </>
            }>     
            </Route>
          <Route path='/about' element={<AboutPage/>}/>
          {/* <Route path='/post/:id/:name' element={<Post/>}/> */}
          <Route path='/post/*' element={<Post/>}/>
          </Routes>

          

        </div>
        <AboutIconLink />
        </Router>

    </FeedbackProvider>
    
  )
}

export default App
