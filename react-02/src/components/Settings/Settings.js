import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import AppTheme from '../../contexts/Colors'

function Settings() {
   const theme = useContext(ThemeContext)[0];
   const currentTheme = AppTheme[theme];

   const [themeMode, setThemeMode] = useContext(ThemeContext)

   return (
      <div>
         <h1 style={{ backgroundColor: `${currentTheme.backgroundColor}` }}>Settings</h1>
         <button onClick={() => {
            setThemeMode('pink')
         }}>Pink Theme</button>
         <button onClick={() => {
            setThemeMode('blue')
         }}>Blue Theme</button>
      </div>
   )
}

export default Settings