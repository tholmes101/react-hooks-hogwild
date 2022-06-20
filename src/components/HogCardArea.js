import React, {useState} from 'react'
import { Card } from 'semantic-ui-react'
import HogCard from './HogCard'

function HogCardArea({ hogData, showGreased, sortBy }) {

    function handleData() {

        const hogDataCopy = showGreased ? hogData.filter(hog => hog.greased) : [...hogData]

        if (!sortBy) return hogData

        if (sortBy === "weight")
            return hogDataCopy.sort((firstHog, secondHog) => firstHog.weight - secondHog.weight)

        if (sortBy === "name")
            return hogDataCopy.sort((firstHog, secondHog) => {
                if (firstHog.name > secondHog.name) {
                    return 1
                } else if (firstHog.name < secondHog.name) {
                    return -1
                }
                return 0
            })

    return hogDataCopy;
    }
    
    return (
        <Card.Group itemsPerRow={4}>
            {handleData().map((hog)=> {
                return (
                    <HogCard 
                    key={hog.name} 
                    name={hog.name}
                    image={hog.image}
                    greased={hog.greased}
                    specialty={hog.specialty}
                    weight={hog.weight}
                    highestMedal={hog["highest medal achieved"]}
                    setCurrentHog={hog.setCurrentHog}/>
                )

            })}
        
        </Card.Group>
    )
}
export default HogCardArea