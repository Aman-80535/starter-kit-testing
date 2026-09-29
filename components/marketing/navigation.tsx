"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"
import {
  PublicAccountMenu,
  type PublicAccount,
} from "@/components/auth/public-account-menu"

export function MarketingNavigation({
  links,
  account,
}: {
  links: { label: string; href: string }[]
  account: PublicAccount | null
}) {
  const [open, setOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  const toggleMenu = () => {
    setOpen((current) => !current)
  }

  const closeMenu = () => {
    setOpen(false)
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <div className="marketing-navigation">
      <button
        type="button"
        className="marketing-menu-toggle"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="marketing-menu"
        onClick={toggleMenu}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <nav
        id="marketing-menu"
        aria-label="Main navigation"
        className={`marketing-menu${open ? " is-open" : ""}`}
      >
        <div className="marketing-nav-links">
          {links.map((link) => (
            <Link key={link.label} href={link.href} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="marketing-nav-actions">
          <button
            type="button"
            className="marketing-theme-toggle"
            onClick={toggleTheme}
            aria-label={
              resolvedTheme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
          >
            <span className="marketing-theme-icon">
              {resolvedTheme === "dark" ? (
                <Sun size={16} />
              ) : (
                <Moon size={16} />
              )}
            </span>
          </button>

          {!account && (
            <Link
              href="/login"
              className="marketing-login"
              onClick={closeMenu}
            >
              Sign in
            </Link>
          )}
        </div>
      </nav>

      {account && <PublicAccountMenu account={account} />}
    </div>
  )
}