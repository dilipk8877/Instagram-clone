import React from 'react'
import { useState } from 'react'
import { UserContext } from '../App'

const Following = () => {
    const [state, dispatch] = useState(UserContext)
    return (
        <>
            {/* <div>
                <img style={{ width: "160px", height: "160px", borderRadius: "80px" }}
                    src={state ? state.pic : "loading"}
                />

            </div> */}
            <div>
                <h4>{state ? state.name : "loading"}</h4>
                <h5>{state ? state.email : "loading"}</h5>
            </div>

        </>
    )
}

export default Following