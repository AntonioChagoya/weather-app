import React from 'react';


function HighLights(){
  return  (
    <section className="highlights">
      <h2>Today's Highlights</h2>

      <div className="highlights--container">
        <div className="highlights--box highlights--box__big">
          <h5>Wind status</h5>
          <h2>7mph</h2>
          <span>WSW</span>
        </div>
        <div className=" highlights--box highlights--box__big">
          <h5>Wind status</h5>
          <h2>7mph</h2>
          <span>WSW</span>
        </div>
        <div className="highlights--box highlights--box__small">
          <h5>Wind status</h5>
          <h2>7mph</h2>
          <span>WSW</span>
        </div>
        <div className="highlights--box highlights--box__small">
          <h5>Wind status</h5>
          <h2>7mph</h2>
          <span>WSW</span>
        </div>
        
      </div>
    </section>
  )
}

export default HighLights;