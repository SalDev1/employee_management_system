import React from "react";

const HeaderComponent = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark '>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            EMS
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link' href='http://localhost:3000'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link'
                  href='http://localhost:3000/add-employee'>
                  Add Employee
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderComponent;