import React,{Component} from 'react';
import '../assets/css/header.scss';
class Header extends Component {
    render(){
        return(
            <div className="maincontainer">
              <div className="subcontainer">
               <div className="header">
                 <div className="header__logo"> 
                   <a class="header__logoimg" href="#"></a>
                 </div>
                 <div class="container">
										<nav class="navbar navbar-expand-lg navbar-light bg-light">
												<a class="navbar-brand" href="#">Navbar</a>
													<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
													  <span class="navbar-toggler-icon"></span>
													</button>
													<div class="collapse navbar-collapse" id="navbarNavDropdown">
															<ul class="navbar-nav">
																	<li class="nav-item active">
																		<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
																	</li>
																	<li class="nav-item">
																		<a class="nav-link" href="#">Features</a>
																	</li>
																	<li class="nav-item">
																		<a class="nav-link" href="#">Pricing</a>
																	</li>
															</ul>
													</div>
										</nav>
    </div>

                </div>
            </div>
	   </div>

        )
    }
}
export default Header;