import React from 'react'
import AboutMe from '../components/about-me/AboutMe';
import Grid from '../components/grid/Grid';
import Circles from '../components/ui/cicrcles/Circles';
import MetaTitle from '../components/ui/MetaTitle';
import "./Home.css";

var me = require("../json/m.json");
var links = require("../json/l.json");

export const Home = () => {

  return (
    <section className="section">
      <MetaTitle title="Портфолио" />
      <div className="container">
        <AboutMe me={me} />
        <Grid links={links} />
      </div>
      <Circles />
    </section>
  );
}
