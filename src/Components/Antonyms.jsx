import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Styles.css";

const Antonyms = (props) => {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        axios.get(`http://sesat.fdi.ucm.es:8080/servicios/rest/antonimos/json/${props.word}`
        ).then((response) => {
            setResponse(response.data);
        })
    }, [props.word]);

    return (
        response ?
            <div className="antonimos">
                <p className="title">ANTONIMOS</p>
                {response.antonimos.map((i) => {
                    return (
                        <div className="antonimo" onClick={() => props.setWord(i.antonimo)}>
                            {i.antonimo}
                        </div>
                    )
                })}
            </div>
        : null
    )
}

export default Antonyms;