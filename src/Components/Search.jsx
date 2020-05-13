import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Styles.css";
import Synonyms from "./Synonyms"
import Antonyms from "./Antonyms"

const Search = (props) => {
    const [word, setWord] = useState("lento");
    const [response, setResponse] = useState(null);

    useEffect(() => {
        axios.get(`http://sesat.fdi.ucm.es:8080/servicios/rest/definicion/json/${word}`
        ).then((response) => {
            setResponse(response.data);
        })
    }, [word]);

    return (
        <div className="body">
            <div className="header">
                <input
                    className="input_word"
                    type="text"
                    placeholder="Search"
                    id="search"
                />
                <button className="searchButton" onClick={() => setWord(document.getElementById("search").value)}>
                    Search
            </button>
            </div>
            <div className="busqueda_container">
                <p className="busqueda">Busqueda: {word}</p>
            </div>
            <div className="content">
                {response ?
                    <div className="definiciones">
                        <p className="title">DEFINICIONES</p>
                        {response.definiciones.map((i) => {
                            return (
                                <div className="definicion">
                                    {i.definicion}
                                </div>
                            )
                        })}
                    </div>
                    : null}

                <Synonyms word={word} setWord={setWord} />
                <Antonyms word={word} setWord={setWord} />
            </div>


        </div>
    )
}

export default Search;