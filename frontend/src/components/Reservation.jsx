import React, { useState } from 'react'
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { toast } from "react-hot-toast";


const Reservation = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        date: '',
        time: ''
    });
    const [customError, setCustomError] = useState(null);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleReservation = async (e) => {
        e.preventDefault();
        try {
            const {data} = await axios.post(`http://localhost:8000/api/v1/reservation/send`, formData,{
                headers:{
                    "Content-Type":"application/json"
                },
                withCredentials:true
            });
            console.log({data})
                toast.success(data.message);
                navigate("/success")
        } catch (error) {
            console.error(error);
            const errorMessage = error.response?.data?.message || error.message;
            setCustomError(errorMessage);
            toast.error(errorMessage);
        }
    };

    return (
        <section className="reservation" id="reservation">
        <div className="container">
          <div className="banner">
            <img src="/reservation.png" alt="res" />
          </div>
          <div className="banner">
            <div className="reservation_form_box">
              <h1>MAKE A RESERVATION</h1>
              <p>For Further Questions, Please Call</p>
              <form onSubmit={handleReservation}>
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    name='firstName'
                    id='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    name='lastName'
                    id='lastName'
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="date"
                    placeholder="Date"
                    name='date'
                    id='date'
                    value={formData.date}
                    onChange={handleChange}
                  />
                  <input
                    type="time"
                    placeholder="Time"
                    name='time'
                    id='time'
                    value={formData.time}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    name='email'
                    id='email'
                    className="email_tag"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input
                    type="number"
                    placeholder="Phone"
                    name='phone'
                    id='phone'
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit">
                  RESERVE NOW{" "}
                  <span>
                    <HiOutlineArrowNarrowRight />
                  </span>
                </button>
              </form>

            </div>
          </div>
        </div>
      </section>
  )
}

export default Reservation