import React, { useState } from 'react'

const MsApp = () => {
    const callMessage = 'Call MS'
    const callingMessage = 'Calling MS...'
    const [data, setData] = useState('')
    const [message, setMessage] = useState(callMessage)

    const doFetch = async () => {
        let result = await fetch('https://gateway-1-charles3.apps.qqd02ebq.usgovvirginia.aroapp.azure.us/sample/')
        result = await result.text()
        setMessage(callMessage)
        setData(result)  
    }

    const handleClick = async () => {
        setData('')
        setMessage(callingMessage)
        setTimeout(doFetch, 20)
    }

    return (
        <div style={{ padding : '10px', backgroundColor: 'black', color: 'white', minHeight: '100vh', fontSize: '14px' }}>
            <div style={{ fontWeight: 'bold', paddingBottom: '10px', fontSize: '26px' }}>Sample React App</div>
            <div style={{ display: 'flex' }}>
                <button onClick={handleClick}>{message}</button>
            </div>
            {data &&
                <>
                    <div style={{ fontWeight: 'bold', paddingTop: '20px', paddingBottom: '10px', fontSize: '18px' }}>Result of MS call</div>
                    <div dangerouslySetInnerHTML={{ __html: data }} />
                </>
            }
        </div>
    )
}

export default MsApp