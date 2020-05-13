import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Styles.css";

const Synonyms = (props) => {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        axios.get(`http://sesat.fdi.ucm.es:8080/servicios/rest/sinonimos/json/${props.word}`
        ).then((response) => {
            setResponse(response.data);
        })
    }, [props.word]);

    return (
        response ?
            <div className="sinonimos">
                <p className="title">SINONIMOS</p>
                {response.sinonimos.map((i) => {
                    return (
                        <div className="sinonimo" onClick={() => props.setWord(i.sinonimo)}>
                            {i.sinonimo}
                        </div>
                    )
                })}
            </div>
        : null
    )
}

export default Synonyms;