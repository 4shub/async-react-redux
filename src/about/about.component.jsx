import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const AboutComponent = (props) => (
    <div>
        I am {props.isAbout && 'about'}
        <br/>
        <Link to="/">Go home</Link>
    </div>
);

const mapStateToProps = (({ about }) => (about));

const About = connect(mapStateToProps)(AboutComponent);

export default About;
