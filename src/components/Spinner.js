import React from 'react'
import loadingimg from './loadingimage.gif'

const Spinner = ()=> {
        return (
            <div className="text-center">
                <img className="my-3" src={loadingimg} alt="loading" />
            </div>
        )
}

export default Spinner