"use client"
import * as React from "react"
import { useTheme } from "next-themes"
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <Button
      className="dark:text-white text-black bg-transparent border-none"
      variant="outline"
      size="icon"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <DarkModeIcon />
      ) : (
        <LightModeIcon/>
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
