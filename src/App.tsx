import { BrowserRouter as  Router , Route , Routes  } from "react-router-dom" ;
import Header from "./Components/Header";

  import { lazy , Suspense } from "react";

  const Home     = lazy(() => import('./Components/Home'));
  const Learning = lazy(() => import('./Components/Learning'));
  const Quiz     = lazy(() => import('./Components/Quiz'));
  const Result   = lazy(() => import('./Components/Result'));
  const Login    = lazy(() => import('./Components/Login'));
  const Loader   = lazy(() => import('./Components/Loader'));

function App() {

  return (
        <Router>
          <Header />
            <Suspense fallback = {<Loader />}>
            <Routes> 
               <Route path = "/"  element = {<Home />} />
               <Route path = "/learn"  element = {<Learning />} />
               <Route path = "/quiz"  element = {<Quiz />} />
               <Route path = "/result"  element = {<Result />} />
               <Route path = "/login"  element = {<Login  />} />
            </Routes>
            </Suspense>
        </Router>
  )
}

export default App
