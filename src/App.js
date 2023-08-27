import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { BookProvider } from './context/BookProvider'
import { AuthProvider } from './context/AuthProvider'
import { LocationProvider } from './context/LocationProvider'
import NavBar from './components/NavBar';
import Search from './components/Search';
import Home from './components/Home';
import Matches from './components/Matches';
import Profile from './components/Profile';
import Filter from './components/Filter';
import Book from './components/Book';
import SearchBar from './components/SearchBar';
import Login from './components/Login';
import Register from './components/Register';
import { ProtectedRoute } from './components/ProtectedRoute';
import Map from './components/Map';
import UserBooks from './components/UserBooks';


function App() {

  return (
    <AuthProvider>
      <LocationProvider>
        <BookProvider>
          <div className="App">
            <BrowserRouter>
              <Routes>
                <Route path='/register' element={ <Register/> } />
                <Route path='/login' element={ <Login/> } />
                <Route path='/' element={<ProtectedRoute>  <NavBar/> </ProtectedRoute>}>
                    <Route index element={ <Home/> } />
                    <Route path='search' element={ <SearchBar /> }>
                      <Route path='list' element={ <Search /> } />
                      <Route path='book/:id' element={ <Book/> } />
                    </Route>
                    <Route path='matches' element={ <Matches/> } />
                    <Route path='profile' element={ <Profile /> }>
                      <Route path='user-books' element={ <UserBooks /> } />
                      <Route path='map' element={ <Map/> } />
                    </Route>
                    <Route path='filter' element={ <Filter/> } />
                  <Route path='*' element={ <Navigate to="/"/> } />
                </Route>
              </Routes>
            </BrowserRouter>
          </div>
        </BookProvider>
      </LocationProvider>
    </AuthProvider>
  );
}

export default App;