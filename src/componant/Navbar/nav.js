import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
// import Logo from './logo.png'
import './nav.css'
import logo from './medn.jpg'


export function Navbar() {
    return (

        <>
            <nav class="navbar navbar-dark bg-dark fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={logo}  className="mlogo"/></a>


                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Medical Store Management System</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="./mstore">Add Medicines/Stock</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active " href="./add">Stock</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active " href="./user">Add User</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active " href="./userdata"> User Data</a>
                                </li>
                               
                                <li class="nav-item">
                                    <a class="nav-link active " href="/sign">Registation</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active " href="./profile">Profile</a>
                                </li>
                               
                                {/* <li class="nav-item">
            <a class="nav-link active " href="./membership">Logout</a>
          </li> */}
                                <hr />
                                <li class="nav-item">
                                    <a class="nav-link active " href="./">Help & Feedback</a>
                                </li>
                                <hr />
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
  
}
