import React from 'react'
import classes from "./Dashbord.module.css"
import Header from "./header/Header"
import Stats from "./stats/Stats"
import MyComponent from "./map/Map"
function Dashbord() {
  return (
    <div className={classes.container}>
      <div className={classes.header}><Header/></div>
        <div className={classes.lowepart}>
            <div className={classes.statsandgooglemap}>
                 <div className={classes.stats}></div>
                 <div className={classes.map}>
                    <MyComponent/>
                 </div>
             </div>
            <div className={classes.sidebar}></div>
      </div>
    </div>
  )
}
export default Dashbord