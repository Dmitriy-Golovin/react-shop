import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import { useState,useEffect} from 'react';
import axios from 'axios';
import Loader from './components/Loader';
import React from 'react';

export const AppContext = React.createContext({});

function App() {
    const [productList, setProductList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect (()=>{
        async function axiosData(){
            const productData = await axios.get('https://6446a6210431e885f0183de5.mockapi.io/product')

            setProductList(productData.data);
            setIsLoading(false);
        }
        axiosData();
        
    },[])

    return (

        <AppContext.Provider
        value={
            {
                productList,
                setProductList
            }
        }>
            <div className="App">
            <Header />
            {
                (isLoading)
                    ? <Loader />
                    : <Content />
            }
            <Footer />
            </div>

        </AppContext.Provider>
    );
}

export default App;
