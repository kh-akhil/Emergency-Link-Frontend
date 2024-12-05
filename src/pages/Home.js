import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
    const [message, setMessage] = useState(null);
    const id = localStorage.getItem('id');

    useEffect(() => {
        const socket = new WebSocket(`ws://127.0.0.1:8000/ws/alert/?vehicle_id=${id}`);
        
        socket.onopen = function(event) {
            console.log("Connected to webserver");
        };

        socket.onmessage = function(event) {
            const data = JSON.parse(event.data);
            console.log("Message from server:", data);
            setMessage(data);
        };

        // Cleanup WebSocket connection when component unmounts
        return () => {
            socket.close();
            console.log("WebSocket closed");
        };
    }, [id]);

    return (
        <div className="home-container">
            <h1 className="heading">V2V Assisted Emergency Route Optimization</h1>
            <div className="message-box">
                <span className="message-text">ID : {id}</span> <br/>
                <p className="message-text">Message : {message ? JSON.stringify(message) : "No message yet"}</p>
            </div>
        </div>
    );
};

export default Home;
