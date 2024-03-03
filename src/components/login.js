import React from 'react'

export default function login() {
    return (
        <form id="load">
            <label htmlforfor="email">Email Id</label>
            <input type="email" id="email" required />
            <label htmlforfor="password">Password</label>
            <input type="password" id="password" required />
            <button type="submit">Login</button>
        </form>
    )
}
