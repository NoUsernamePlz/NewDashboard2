import React, { useEffect, useState } from 'react';
import jsonData from './subcategory.json';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Middleright from './components/MiddleRight';
// import MyComponent from './components/Test';
// import TopSubcategories from './components/Test';
// import Test from './components/Test';

interface DataItem {
  orderdate: string;
  subcategory: string;
  sale: number;
  profit: number;
  countcustomer: number;
}




interface ResultItem {
  name: string;
  value: number;
}










function App() {
  const [dataArray, setDataArray] = useState<DataItem[]>([]);
  const [formateddataArray, setFormateddataArray] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]); // Use 'any[]' for the filtered data
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [selectedInterval, setSelectedInterval] = useState<any>(''); // Track the selected interval
  const [topSubcategories, setTopSubcategories] = useState<Subcategory[]>([]);
  const [top6Subcategories, setTop6Subcategories] = useState<ResultItem[]>([]);
  const [top6filteredSubcategories, setTop6filteredSubcategories] = useState<ResultItem[]>([]);

 
 
  

  useEffect(() => {
    // Set the data from the imported JSON
    setDataArray(jsonData.data);
   



    
  }, []);

  useEffect(() => {
    // Set the data from the imported JSON
    
    function calculateTop6Items(data: DataItem[]): ResultItem[] {
      // Create an object to store the total sales for each subcategory
      const subcategorySales: { [key: string]: number } = {};
    
      // Calculate sales
      data.forEach((item) => {
          if (subcategorySales[item.subcategory]) {
              subcategorySales[item.subcategory] += item.sale;
          } else {
              subcategorySales[item.subcategory] = item.sale;
          }
      });
    
      // Sort subcategories by total sales in descending order
      const sortedSubcategories = Object.keys(subcategorySales).sort(
          (a, b) => subcategorySales[b] - subcategorySales[a]
      );
    
      // Take the top 6 subcategories
      const top6Subcategories = sortedSubcategories.slice(0, 7);
    
      // Convert to the desired format
      const result: ResultItem[] = top6Subcategories.map((subcategory) => ({
          name: subcategory,
          value: subcategorySales[subcategory],
      }));
    
      return result;
    }
   
    const top6Items = calculateTop6Items(dataArray);
    setTop6Subcategories(top6Items);


    
  }, [dataArray]);

  






 
  
  interface Subcategory {
    orderdate: string;
    subcategory: string;
    sale: number;
    profit: number;
    countcustomer: number;
  }
  

    
  
    useEffect(() => {
      // Parse the JSON data
      const data: Subcategory[] = jsonData.data;
  
      // Calculate the occurrence count for each subcategory
      const subcategoryCounts: { [subcategory: string]: number } = {};
      data.forEach((item) => {
        const subcategory = item.subcategory;
        subcategoryCounts[subcategory] = (subcategoryCounts[subcategory] || 0) + 1;
      });
  
      // Sort subcategories by occurrence count in descending order
      const sortedSubcategories = Object.keys(subcategoryCounts).sort(
        (a, b) => subcategoryCounts[b] - subcategoryCounts[a]
      );
  
      // Get the top 6 subcategories
      const top6Subcategories = sortedSubcategories.slice(0, 7);
  
      // Filter the data to include only the top 10 subcategories
      const filteredData = data.filter((item) =>
        top6Subcategories.includes(item.subcategory)
      );
  
      setTopSubcategories(filteredData);
    }, []);
  
    const calculateAverage = (property: keyof Subcategory) => {
      const averages: { [subcategory: string]: number } = {};
  
      dataArray.forEach((subcategory) => {
        if (!averages[subcategory.subcategory]) {
          averages[subcategory.subcategory] = Number(subcategory[property]);
        } else {
          averages[subcategory.subcategory] += Number(subcategory[property]);
        }
      });
  
      // Calculate the average for each subcategory
      for (const subcategory in averages) {
        averages[subcategory] /= topSubcategories.length;
      }
  
      return averages;
    };
  
    const averageSales = calculateAverage('sale');
    const averageProfit = calculateAverage('profit');
  
  
   
  

    useEffect(() => {
      // Filter data when startDate and endDate change
      if (startDate && endDate) {
        const filteredData = dataArray.filter(item => {
          const orderDate = new Date(item.orderdate);
          return orderDate >= startDate && orderDate <= endDate;
        });
  
        // Convert the filtered data into the specified format
        
        setFilteredData(filteredData);
      }
    }, [startDate, endDate, dataArray]);


    useEffect(() => {
      const daysDifference = Math.floor(
        ((endDate?.getTime() || 0) - (startDate?.getTime() || 0)) / (1000 * 60 * 60 * 24)- 457 
      );
  
      if (daysDifference <= 1) {
        setSelectedInterval('1 Day');
      } else if (daysDifference <= 7) {
        setSelectedInterval('1 week');
      } else if (daysDifference <= 30) {
        setSelectedInterval('1 Month');
      } else if (daysDifference <= 90) {
        setSelectedInterval('3 Months');
      } else if (daysDifference <= 365) {
        setSelectedInterval('1 Year');
      } else {
        setSelectedInterval('custom');
      }
    }, [startDate, endDate]);


    const handleFilterClick = (days: number) => {
      const startDate = new Date('2022-06-12');
      const endDate = new Date(); // Current date
  
      // Calculate the new start date based on the selected number of days
      if (days > 0) {
        startDate.setDate(startDate.getDate() - days);
      }
  
      setStartDate(startDate);
      setEndDate(endDate);
     
    };

    useEffect(() => {
      // Set the data from the imported JSON
      
      function calculateFilteredTop6Items(data: DataItem[]): ResultItem[] {
        // Create an object to store the total sales for each subcategory
        const subcategorySales: { [key: string]: number } = {};
      
        // Calculate sales
        data.forEach((item) => {
            if (subcategorySales[item.subcategory]) {
                subcategorySales[item.subcategory] += item.sale;
            } else {
                subcategorySales[item.subcategory] = item.sale;
            }
        });
      
        // Sort subcategories by total sales in descending order
        const sortedSubcategories = Object.keys(subcategorySales).sort(
            (a, b) => subcategorySales[b] - subcategorySales[a]
        );
      
        // Take the top 6 subcategories
        const top6Subcategories = sortedSubcategories.slice(0, 7);
      
        // Convert to the desired format
        const result: ResultItem[] = top6Subcategories.map((subcategory) => ({
            name: subcategory,
            value: subcategorySales[subcategory],
        }));
      
        return result;
      }
     
      const top6Items = calculateFilteredTop6Items(filteredData);
      setTop6filteredSubcategories(top6Items);
  
  
      
    }, [filteredData,startDate,endDate]);

 
















 

  const subcategoryAverages = Object.keys(averageSales).map((subcategory) => ({
    subcategory,
    averageSale: Math.round((Number(averageSales[subcategory]))*100)/100,
    averageProfit: Math.round(( Number(averageProfit[subcategory]))*100)/100,
  }));



    

  // Create an object to store sales data for each subcategory
  
  const subcategorySales: { [subcategory: string]: any[] } = {};

  topSubcategories.forEach(item => {
    const { subcategory, sale } = item;
    if (!subcategorySales[subcategory]) {
      subcategorySales[subcategory] = [];
    }
    subcategorySales[subcategory].push( Math.round(( Number(sale))*100)/100);
  });


const salesArray = subcategoryAverages.map(item => Math.round((Number(item.averageSale)) * 10) / 10);
const profitArray = subcategoryAverages.map(item => Math.round((Number(item.averageProfit)) * 10) / 10);

console.log(salesArray);

  // console.log(top6Subcategories);
  // console.log(filteredData);
  console.log(profitArray);
  console.log(top6Subcategories);
  console.log(subcategoryAverages);
 
  
 

  return (
    <div className="flex flex-col h-screen xs:max-lg:h-auto items-center justify-center w-[100%]  bg-[#05050F] overflow-hidden  font-sans">
      <Navbar />
      <div className='flex flex-row xs:max-lg:flex-col xs:max-lg:ml-18 justify-between items-center w-[90vw] xs:max-md:mt-[1.8rem]'>
        <div className=''>
           <Sidebar subcategoryAverages={subcategoryAverages} subcategorySales={subcategorySales} salesArray={salesArray} profitArray={profitArray}/>
        </div>
        <div className='xs:max-lg:my-[28rem]'>
          <Middleright processedData={(top6filteredSubcategories).length==0?top6Subcategories:top6filteredSubcategories} handleFilterClick={handleFilterClick} />
        </div>
      </div>
      <Footer />
    </div>
    // <>
    // <Test/>
    // </>
  );
}

export default App;
