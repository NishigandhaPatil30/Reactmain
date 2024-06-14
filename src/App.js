import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://swatpro.co/api.php') 
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    const generateOffer = (category) => {
        switch (category) {
            case 'Food':
                return 'Discount voucher for larger grocery orders';
            case 'Health':
                return 'Loyalty program points for health product purchases';
            case 'Insurance':
                return 'Special offer for bundled insurance plans';
            case 'Professional':
                return 'Referral program for professional services';
            default:
                return 'No offer available';
        }
    };

    return (
        <div className="App">
            <h1>Category Metrics and Targeted Offers</h1>
            <table>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Number of Messages</th>
                        <th>Maximum Spend</th>
                        <th>Mean Spend</th>
                        <th>Targeted Offer</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(data).map(([category, metrics]) => (
                        <tr key={category}>
                            <td>{category}</td>
                            <td>{metrics.count}</td>
                            <td>{metrics.maxSpend}</td>
                            <td>{metrics.meanSpend.toFixed(2)}</td>
                            <td>{generateOffer(category)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
