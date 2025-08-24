"use client"
import React, { createContext, useEffect, useState } from 'react'
export let themeContext = createContext()
const ThemeContext = ({ children }) => {
    let [isDark, setDark] = useState(false)

    function toggleTheme() {
        setDark(prev => !prev)
    }
    useEffect(() => {
        console.log(isDark)
        isDark ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
        console.log("Current classes:", document.documentElement.classList.toString())

    }, [isDark])

    return (
        <themeContext.Provider value={{ isDark, toggleTheme }} >
            {children}
        </themeContext.Provider>
    )
}

export default ThemeContext
