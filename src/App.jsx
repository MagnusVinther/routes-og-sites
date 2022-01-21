import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './Components/Partials/Header/Header'
import { Main } from './Components/Partials/Main/Main'
import { Footer } from './Components/Partials/Footer/Footer'
import { Home } from './Components/Pages/Home/Home'
import { About } from './Components/Pages/About/About'
import { Gallery } from './Components/Gallery/Gallery';
import { Greetings } from './Components/Pages/Greetings/Greetings';
import { GreetingWithFunction } from './Components/Pages/Formular/Formular';
import { PlusclickerFunc } from './Components/Pages/Plusclicker/Plusclicker';
import { Timer } from './Components/Timer/Timer';
import { GoalList } from './Components/Pages/Goals/GoalList';
import { GoalDetails } from './Components/Pages/Goals/GoalDetails';

const arrImages = [
    /*
    { 
      id: 1,
      image: 'https://api.mediehuset.net/images/sdg/photos/1.jpg', 
      name: 'Afskaf fattigdom'
    },
    { 
      id: 2,
      image: 'https://api.mediehuset.net/images/sdg/photos/2.jpg', 
      name: 'Stop sult'
    },
    */
    { 
      id: 3,
      image: 'art1-foto-colourbox.jpg', 
      name: 'Test1'
    },
    { 
      id: 4,
      image: 'art2-foto-colourbox.jpg', 
      name: 'Test2'
    },
    { 
      id: 5,
      image: 'art3-foto-colourbox.jpg', 
      name: 'Test3'
    },
    { 
      id: 6,
      image: 'art4-foto-colourbox.jpg', 
      name: 'Test4'
    },
    { 
      id: 7,
      image: 'art5-foto-colourbox.jpg', 
      name: 'Test5'
    },
    { 
      id: 8,
      image: 'art6-foto-colourbox.jpg', 
      name: 'Test6'
    },
    { 
      id: 9,
      image: 'art7-foto-colourbox.jpg', 
      name: 'Test7'
    },
    { 
      id: 10,
      image: 'art8-foto-colourbox.jpg', 
      name: 'Test8'
    }
]

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Main>
          <Greetings />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery imageList={arrImages} />} />
            <Route path="/formular" element={<GreetingWithFunction />} />
            <Route path="/plusclicker" element={<PlusclickerFunc />} />    
            <Route path="/timer" element={<Timer />} />    
            <Route path="/goals" element={<GoalList />} />    
            <Route path="/goals/:goal_id" element={<GoalDetails />} />    
          </Routes>
        </Main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;