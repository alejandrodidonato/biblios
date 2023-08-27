import axios from 'axios'
import { useState, createContext } from 'react'


const BookContext = createContext()

const BookProvider = ({children}) => {

    const [bookData, setBookData] = useState([])

    const [search, setSearch] = useState({
        query: ''
    })


    const [loading, setLoading] = useState(false)

    const dataSearch = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

  
    const getBookList = async datos => {
       
            setLoading(true)

            try{
                const url = "https://www.googleapis.com/books/v1/volumes?q=" + search.query + "&key=AIzaSyAnyZwuyjsG3Ece1XxgbCT5tT2Q7PSZBfE&maxResults=40&printType=books"

                const { data: res } = await axios(url)

                setBookData(res.items)
            
            }
            catch{
                console.log()
            }
            finally{
                setLoading(false)
            }

        
    }

    const [userBooks, setUserBooks] = useState([])

    const [userSearched, setUserSearched] = useState([])



    return (
        <BookContext.Provider value={{ search, dataSearch, getBookList, bookData, loading, userBooks, setUserBooks, userSearched, setUserSearched }}>
            {children}
        </BookContext.Provider>
    )
}

export { BookProvider }

export default BookContext