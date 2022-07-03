import React from 'react'
import classes from "./header.module.css"
function Header() {
  return (<>
    <div className={classes.container}>
        <div>
        <h4 className={classes.headericon}>Qualcomm RAPID<br/>command control center</h4>

        </div>
        <div>
            <button class="btn btn-link text-light">Dashboard</button>
            <button class="btn btn-link text-light">Operations</button>
            <button class="btn btn-link text-light">missions</button>
            <button class="btn btn-link text-light">NFZs</button>
        </div>
    </div>
  </>
  )
}

export default Header