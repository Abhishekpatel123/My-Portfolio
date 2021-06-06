<!-- # Getting Started with Create React App
npx create-react-app client // client is a folder name 

#                                  `This is version 1`

## Then Install dependences  
`npm i react-router-dom react-scroll react-icons react-lottie`

## Folder structure
-src/
    --components/
                ---landingpage
                ---navbar/
                         ----Navbar.js 
                         ----Navbar.css
    --configs/
              ---nav_data.js ** navigation data store here 
    --pages/
            ---LandingPage.js
    --assets/
    


## Start Coding 

- index.js wrapping App.js component to Browser router

- App.js making route with the help of react-router-dom 
```
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/v1/"
          component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
```

 -->
