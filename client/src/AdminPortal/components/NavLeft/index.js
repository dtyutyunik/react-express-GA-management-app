import React from 'react';

export default function NavLeft(props) {
  return (
    // general layout is modified based on
    // Author : www.webthemez.com
    // License: Commons Attribution 3.0
    // http://creativecommons.org/licenses/by/3.0/
    <div className="navbar-default navbar-side" role="navigation">
        <div className="sidebar-collapse">
            <ul className="nav" id="main-menu">
                  <li>
                      <a className="active-menu">
                        DashBoard
                      </a>
                  </li>
                  <li className="active">
                      
                      <span>Course</span>
                      <span className="fa arrow"></span>
                      <ul className="nav nav-second-level collapse in">
                          <li>
                            <a>Course Management</a>
                          </li>
                        </ul>
                   </li>
                   <li className="active">
                       <i className="fa fa-check-square-o"></i>
                        <span>Instructor Management</span>
                        <span className="fa arrow"></span>
                        <ul className="nav nav-second-level collapse in">
                    <li>
                          <a>Instructor Management</a>
                         </li>
                         </ul>
                    </li>
                      <li className="active">
                              <i className="fa fa-user-o"></i>
                              <span>Student Management</span>
                              <span className="fa arrow"></span>
                          <ul className="nav nav-second-level collapse in">
                              <li>
                                  <a>Student List</a>
                              </li>
                          </ul>
                      </li>
                </ul>
            </div>
        </div>
  )
}
