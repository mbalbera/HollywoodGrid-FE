import React, {useEffect, useState} from "react";
import Modal from "../Modal";
import SummaryGrid from "./SummaryGrid";

export default function SummaryModal({actors, closeModal}) {
    const [accuracyArray, setAccuracyArray] = useState([])

    useEffect(() => {
        let accuracyArray = actors.map(actor => {
            if(actor?.actor.id) {
                return  'green' 
            }
            else{
                return actor.incorrectGuesses.length === 0 ? 'grey': 'red'
            }
        })
        setAccuracyArray(accuracyArray)
    }, [])

    return (
        <Modal closeModal={closeModal} title={"Recap"}>
            <h2>{accuracyArray.filter(color=>color === 'green')}/9</h2>
            <SummaryGrid accuracyArray={accuracyArray}/>
        </Modal>
    );
}