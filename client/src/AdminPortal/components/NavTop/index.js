import React from 'react';

export default function NavTop(props) {
  return (
    <div className="navbar navbar-default top-navbar">
	            <div className="navbar-header">
	                <span>Admin</span>
	            </div>
	            <ul className="nav navbar-top-links navbar-right">
	                <li className="dropdown">
	                    <a className="dropdown-toggle" href="javascript:;">
	                        <i className="fa fa-user fa-fw"></i>
		                   
                            <i className="fa fa-caret-down"></i>
	                    </a>
	                    <ul className="dropdown-menu dropdown-user">
	                        <li>
		                        <a onClick ={(e) => {this.onLogout();}} >
	                                <i className="fa fa-sign-out fa-fw"></i>
	                                <span>Log Out</span>
		                        </a>
	                        </li>
	                    </ul>

	                </li>

	            </ul>
	        </div>
  )
}
