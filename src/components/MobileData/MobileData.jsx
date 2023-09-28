import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const MobileData = () => {
    const [phone, setPhone] = useState([]);
    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data =>{
            const loadedData = data.data.data;
            // console.log(loadedData)
            const phoneData = loadedData.map(phone => {
                const parts = phone.slug.split('-');
                const price =parseInt(parts[1]);
                const phoneInfo = {
                    name: phone.phone_name,
                    price: price,  
                }
                return phoneInfo;
            })
            console.log(phoneData);
            setPhone(phoneData);
        })
    }, [])
    return (
        <div>
            <BarChart width={1000} height={400} data={phone}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis  dataKey="name" stroke="orange"/>
                <YAxis stroke="orange"/>
                <Tooltip/>
            </BarChart>
            
        </div>
    );
};

export default MobileData;