// IMPORTS
import React, { useState, useEffect } from 'react'


// FUNCTIONAL COMPONENT
const ListStocks = () => {
    // VANILLA JS SECTION

    const [stocks, setStocks] = useState([]);

    // helper function section:
    // fetch request
    const getStocks = async (req, res) => {
        try {
            const response = await fetch('http://localhost:3003/stocks');
            const jsonData = await response.json();
            
            setStocks(jsonData);
            
        } catch (err) {
            console.error(err.message);
        }
    }
    

    // useEffect section
    useEffect(() => {
        getStocks();
    }, []);


    
    // JSX SECTION
  return (
    <div>
        <h2>ListStocks</h2>
        <table style={{textAlign: 'center'}}>
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Ticker Symbol</th>
                    <th scope="col">Stock Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {stocks.map(stock => (
                    <tr>
                        <th scope="col">{stock.stocks_id}</th>
                            <td>{stock.ticker_symbol}</td>
                            <td>{stock.stocks_name}</td>
                            <td>{stock.stocks_price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        
        
        
        </div>
  )
}


export default ListStocks;