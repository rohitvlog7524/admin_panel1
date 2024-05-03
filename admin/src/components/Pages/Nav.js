import React from 'react'
export const Navbar = () => {
    return (
            <nav className="navbar fixed-top  navbar-expand-md  mb-3 bgcolors">
                <div className="flex-row d-flex">
                    <button type="button" className="navbar-toggler mr-2 " data-toggle="offcanvas" title="Toggle responsive left sidebar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand text-white mx-4" href="#" title="Free Bootstrap 4 Admin Template">Admin Panel</a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse  d-flex justify-content-end" id="collapsingNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link text-white" href="#">Home </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="//www.codeply.com">About</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/" data-toggle="collapse">Signup</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/login" data-target="#myModal" data-toggle="modal">Login</a>
                        </li>
                        <li className="nav-item">
                  <a className="nav-link waves-effect waves-light text-white">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link waves-effect waves-light text-white">
                        <i className="fas fa-envelope-open-text"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link waves-effect waves-light text-white">
                          <i className="fas fa-align-justify"></i>
                      </a>
                    </li>
                    </ul>
                </div>
       </nav>
    )
}
export default Navbar