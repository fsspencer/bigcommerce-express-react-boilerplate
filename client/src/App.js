import React, { useEffect, useState } from 'react'
import axios from 'axios'
import apiKeys from './apiKeys'

function App() {

  const [customerData, setCustomerData] = useState(null);
  const customerId = 344201; // Replace with the actual customer ID

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/customers/${customerId}`, {
          headers: {
            Authorization: `Bearer ${apiKeys.bearerToken}`
          }
        });

        setCustomerData(response.data);
      } catch (error) {
        console.error('Error fetching customer data:', error);
      }
    };

    fetchData();
  }, [customerId]);

  return (
    <div>
      <h1>Customer Information</h1>
      {customerData ? (
        <div>
          <p>First Name: {customerData.first_name}</p>
          <p>Last Name: {customerData.last_name}</p>
          <p>Email: {customerData.email}</p>
          {/* Add more customer information fields as needed */}
        </div>
      ) : (
        <p>Loading customer data...</p>
      )}
    </div>
  )
}

export default App