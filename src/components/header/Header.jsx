import React, { useEffect, useState } from 'react'
import './header.css'

function Header() {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        if (window.scrollY > 100) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleShow);
        return () => window.removeEventListener('scroll', handleShow);
    }, [])

    return (
        <header className={`${show && 'nav_black'}`}>
            <img className='logo' src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="netflix_logo" />
            <img className='avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="netflix_avatar" />
        </header>
    )
}

export default Header