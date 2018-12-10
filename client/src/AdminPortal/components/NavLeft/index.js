import React from 'react';

export default function NavLeft(props) {
  return (
    <div className="navbar-default navbar-side">
            <div className="sidebar-collapse">
                <ul className="nav">
                    <li>
                          <i className="fa fa-dashboard"></i>
                          <span>DashBoard</span>

                    </li>
                    <li className="active">

                          <i className="fa fa-sitemap"></i>
                           <span>Course</span>
                           <span className="fa arrow"></span>

                        <ul className="nav nav-second-level collapse in">
                            <li >
                                <button>Course Management</button>
                            </li>
                        </ul>
                    </li>
                    <li className="active">

                              <i className="fa fa-check-square-o"></i>
                              <span>Order</span>
                              <span className="fa arrow"></span>

                          <ul className="nav nav-second-level collapse in">
                              <li>
                                  <button>Order Management</button>
                              </li>
                          </ul>
                      </li>
                      <li className="active">                      
                              <i className="fa fa-user-o"></i>
                              <span>Student</span>
                              <span className="fa arrow"></span>
                          <ul className="nav nav-second-level collapse in">
                              <li>
                                  <button>Student Management</button>
                              </li>
                          </ul>
                      </li>
                </ul>

            </div>
        </div>
  )
}
