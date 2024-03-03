import React from 'react'

export default function register() {
    return (
        <form id="load">
            <div style={{ height: '70%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ width: '100%', display: 'flex', height: '40%', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <input type="text" required style={{ backgroundColor: '#D9D9D9', height: '55%', width: '45%' }} placeholder='Name*' />
                    <input type="Number" required style={{ backgroundColor: '#D9D9D9', height: '55%', width: '45%' }} placeholder='Phone No.*' />
                </div>
                <div style={{ width: '100%', display: 'flex', height: '40%', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <input type="Number" required style={{ backgroundColor: '#D9D9D9', height: '55%', width: '45%' }} placeholder='Age*' />
                    <input type="email"  required style={{ backgroundColor: '#D9D9D9', height: '55%', width: '45%' }} placeholder='Email*' />
                </div>

                <div style={{ width: '100%', display: 'flex', height: '40%', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <select className="form-select" aria-label="Default select example" style={{ backgroundColor: '#D9D9D9', width: '45%', height: '55%' }} required>
                        <option disabled selected value="">Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <select className="form-select" aria-label="Default select example" style={{backgroundColor: '#D9D9D9', width: '45%', height: '55%' }} required>
                        <option selected disabled value="">Blood Group</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB-">AB-</option>
                        <option value="AB+">AB+</option>
                    </select>
                </div>
                <div style={{ width: '100%', display: 'flex', height: '40%', justifyContent: 'space-evenly', alignItems: 'center' }} >
                    <input type="password" required style={{ backgroundColor: '#D9D9D9', height: '55%', width: '93%' }}  placeholder='Password*' />
                </div>
            </div>
            <div style={{ height: '20%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <button type="submit" style={{ height: '50%' }}>Register</button>
            </div>
        </form>
    )
}
