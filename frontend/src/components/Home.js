import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Particles from "react-particles-js";


function Home(){
  return(
<>
 <Particles
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1000
              }
            },
            shape:{
              type:"circle",
              stroke:{
                width:6,
                color:"#f9ab00"
              }
            }
          },
        }}
      />
      <Navbar />
      <Header />
      
    </>
 

  );
}
export default Home;