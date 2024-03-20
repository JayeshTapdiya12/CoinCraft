import React from 'react'
import { DNA } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div style={{ display: "flex,", justifyContent: "center", alignItems: 'center', height: "100vh", marginTop: "425px", marginLeft: "900px" }}>
            <DNA
                visible={true}
                height="100"
                width="100"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />

        </div>
    )
}

export default Loader
