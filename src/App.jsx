import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import FoodTruckDetail from './FoodTruckDetail';

function App() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('/src/assets/Mobile_Food_Facility_Permit.csv')
      .then((response) => response.text())
      .then((text) => {
        Papa.parse(text, {
          header: true,
          complete: (result) => {
            setData(result.data);
          },
        });
      });
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
   
    const result = data.filter((item) => {
      return item.FoodItems?.toLowerCase().includes(searchQuery);
    });
    setData(result);
  };
  
  return (
    <>
      <div className="container">
        <h4 className="searchtitle">Search Food Truck</h4>
            <input
            className='searchbar'
            type="text"
            placeholder="Search for food ... For example: Tacos, Pizza, etc."
            value={searchQuery}
            onChange={handleSearch}
          />
          <small>Note: Start over search refresh page</small>
      
          <ul className="foodtrucks">
          <h4 className="title">List of Food trucks, Click on list to explore more</h4>
              { 
                data.filter((item) => item.Status?.toLowerCase() === 'approved' && item.FacilityType?.toLowerCase() === 'truck')
                .map((item, index) => (
                  <li className="foodtruck" key={index}>
                    <FoodTruckDetail key={index} title={item.Applicant}>
                      <p><strong>Address:</strong>  {item.Address}</p>
                      <p><strong>Food Items:</strong>  {item.FoodItems}</p>
                      <p><strong>Day Hours:</strong>  {item.Dayshours ? item.Dayshours : "Hours not mentioned"}</p>
                    </FoodTruckDetail>
                  </li>
                ))
              }
            </ul>
          
      </div>
      </>
  )
}

export default App
