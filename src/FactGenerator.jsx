import { ThreeDot, OrbitProgress  } from "react-loading-indicators"
import { useState } from "react"

function FactGenerator(){

    const [fact, setFact] = useState('')
    const [loading, setLoading] = useState(false)

    const getFact = async function(){
        if (loading){
            console.log("still loading")
            return
        }
        try {
            setLoading(true)
            const response = await fetch ("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en")
            let json = await response.json()
    
            console.log(json)
            setFact(json.text)
            setLoading(false)
        }
        catch (e) {
            console.log(e)
            setLoading(false)
        }
    }

    return (

        <div>
            <h1 className="text-white" > Fact Generator</h1>

            <div className="m-5">
                
                {loading && <OrbitProgress variant="spokes" dense color="white" size="medium" text="" textColor="" />
                ||

                <p className="fs-2 text-white fw-bolder">
                {fact}<br/>
                </p>}

            </div>
            

            <button onClick={() => getFact()}>
                Generate Fact
            </button>

        </div>
    )
}

export default FactGenerator