import React from 'react';
import './Navigation.css'

function Navigation() {
  return (
    <div className='nav'>
            <section>
              <div className="nav-heading">
                <h1><a href="#carousel">Home page</a></h1>
              </div>
            </section>
            <section>
              <div className="nav-heading">
            <h1><a href="#about-us">About us</a></h1>
              </div>
            </section>
            <section>
              <div className="nav-heading">
                <h1><a href="#costs">Costs</a></h1>
              </div>
            </section>
            <section>
              <div className="title">
            <h1>MBA</h1>
              </div>
            </section>
            <section>
              <div className="nav-heading">
                <h1><a href="#coaching">Coaching</a></h1>
              </div>
            </section>
            <section>
              <div className="nav-heading">
                <h1><a href="#weekly-meetup">Weekly meetup</a></h1>
              </div>
            </section>
            <section>
              <div className="nav-heading">
                <h1><a href="#sign-up">Sign up</a></h1>
              </div>
            </section>
        </div>
  );
}

export default Navigation;
