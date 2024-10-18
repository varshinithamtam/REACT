import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <nav classnamename="navbar navbar-expand-lg bg-body-tertiary">
  <div classnamename="container-fluid">
    <a classnamename="navbar-brand" href="#">Navbar</a>
    <button classnamename="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span classnamename="navbar-toggler-icon"></span>
    </button>
    <div classnamename="collapse navbar-collapse" id="navbarSupportedContent">
      <ul classname="navbar-nav me-auto mb-2 mb-lg-0">
        <li classname="nav-item">
          <a classname="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li classname="nav-item">
          <a classname="nav-link" href="#">Link</a>
        </li>
        <li classname="nav-item dropdown">
          <a classname="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul classname="dropdown-menu">
            <li><a classname="dropdown-item" href="#">Action</a></li>
            <li><a classname="dropdown-item" href="#">Another action</a></li>
            <li><hr classname="dropdown-divider"/></li>
            <li><a classname="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li classname="nav-item">
          <a classname="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form classname="d-flex" role="search">
        <input classname="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button classname="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default App
