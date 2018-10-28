import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const HomeComponent = () => (
    <div>
        I am {props.isHome && 'home'}!
        <br/>
        <Link to="/about">Go to About</Link>
    </div>
);

const mapStateToProps = (({ home }) => (home));

const Home = connect(mapStateToProps)(HomeComponent);

export default Home;
