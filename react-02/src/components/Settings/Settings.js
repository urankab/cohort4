import React, { useState, useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import AppTheme from '../../contexts/Colors'

function Settings() {
   const theme = useContext(ThemeContext)[0];
   const currentTheme = AppTheme[theme];
   const [themeMode, setThemeMode] = useContext(ThemeContext)
   const [message, setMessage] = useState('Please select a theme - default is pink')

   return (
      <div>
         <h1 style={{
            backgroundColor: currentTheme.backgroundColor,
            color: currentTheme.color,
         }}>Settings</h1>
         <div style={{
            backgroundColor: currentTheme.backgroundColor2,
            borderRadius: currentTheme.borderRadius,
            padding: currentTheme.padding,
            display: currentTheme.display
         }}>
            <h3 style={{
               color: currentTheme.color,
               marginTop: currentTheme.marginTop
            }}>{message}</h3>
            <button onClick={() => {
               setThemeMode('pink')
               setMessage('Theme is set to pink')
            }}>Pink Theme</button>
            <button onClick={() => {
               setThemeMode('blue')
               setMessage('Theme is set to blue')
            }}>Blue Theme</button>
         </div>
      </div>
   )
}

export default Settings