import axios from "axios";
import { useState } from "react";


export async function getStaticProps() {
    const data = await axios.get('http://localhost:3000/api/amiibo');
    const amiiboList = data.data
    return {
        props: { amiiboList }
    };
}

export default function Amiibos({ amiiboList }) {
    let filteredAmiibos;
    const [selectedGame, setSelectedGame] = useState("All");

    const handleGameSelection = (event) => {
        setSelectedGame(event.target.value);
    };

    if (selectedGame === "All") {
        filteredAmiibos = amiiboList.data.slice().sort((a, b) => a.name.localeCompare(b.name));;
    } else {
        filteredAmiibos = amiiboList.data.filter(amiibo => amiibo.Game === selectedGame).slice().sort((a, b) => a.name.localeCompare(b.name));
    }
    const gameBorderColors = {
        "Super Smash Bros": "blue",
        "Super Mario": "red",
        "Zelda": "green",
        "Shovel Knight": "purple",
        "Splatoon": "orange",
        "Wool Yoshi": "pink",
        "Chibi Robo": "silver",
        "Fire Emblem": "navy",
        "Pokemon": "yellow",
        "Animal Crossing": "lime",
        "Metroid": "cyan",
        "Kirby": "magenta",
        "Monster Hunter": "darkgreen",
        "Pikmin": "brown",
        "All": "cyan" 
    };

    return (
        <>
            <style jsx>{`
                body {
                    background-color: #121212;
                    color: #e0e0e0;
                }

                .grid-container {
                    display: grid;
                    grid-template-columns: repeat(6, 1fr);
                    gap: 20px;
                    padding: 20px;
                }

                .card {
                    background-color: #1e1e1e;
                    border-radius: 8px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
                    padding: 15px;
                    text-align: center;
                    transition: transform 0.3s, border 0.3s;
                    border: 2px cyan solid;
                }

                .card:hover {
                    transform: translateY(-10px);
                    border: 2px cyan solid;
                }

                .card-image {
                    max-width: 100px;
                    height: auto;
                    margin-bottom: 10px;
                }

                .card h2 {
                    font-size: 1.2em;
                    margin: 10px 0;
                    color: #ffffff;
                }

                .card p {
                    font-size: 0.9em;
                    color: #b0b0b0;
                }
            `}</style>
            <div>
                <h1 style={{ textAlign: 'center', color: '#e0e0e0' }}>Amiibo List</h1>
                
                <input type="radio" id="All" name="Game" value="All" checked={selectedGame === "All"} onChange={handleGameSelection} />
                <label htmlFor="All"> All &nbsp;&nbsp;</label>

                <input type="radio" id="Super Smash Bros" name="Game" value="Super Smash Bros" checked={selectedGame === "Super Smash Bros"} onChange={handleGameSelection} />
                <label htmlFor="Super Smash Bros"> Super Smash Bros &nbsp;&nbsp;</label>

                <input type="radio" id="Super Mario" name="Game" value="Super Mario" checked={selectedGame === "Super Mario"} onChange={handleGameSelection} />
                <label htmlFor="Super Mario"> Super Mario &nbsp;&nbsp;</label>

                <input type="radio" id="Zelda" name="Game" value="Zelda" checked={selectedGame === "Zelda"} onChange={handleGameSelection} />
                <label htmlFor="Zelda"> Zelda &nbsp;&nbsp;</label>

                <input type="radio" id="Shovel Knight" name="Game" value="Shovel Knight" checked={selectedGame === "Shovel Knight"} onChange={handleGameSelection} />
                <label htmlFor="Shovel Knight"> Shovel Knight &nbsp;&nbsp;</label>

                <input type="radio" id="Splatoon" name="Game" value="Splatoon" checked={selectedGame === "Splatoon"} onChange={handleGameSelection} />
                <label htmlFor="Splatoon"> Splatoon &nbsp;&nbsp;</label>

                <input type="radio" id="Wool Yoshi" name="Game" value="Wool Yoshi" checked={selectedGame === "Wool Yoshi"} onChange={handleGameSelection} />
                <label htmlFor="Wool Yoshi"> Wool Yoshi &nbsp;&nbsp;</label>

                <input type="radio" id="Chibi Robo" name="Game" value="Chibi Robo" checked={selectedGame === "Chibi Robo"} onChange={handleGameSelection} />
                <label htmlFor="Chibi Robo"> Chibi Robo &nbsp;&nbsp;</label>

                <input type="radio" id="Fire Emblem" name="Game" value="Fire Emblem" checked={selectedGame === "Fire Emblem"} onChange={handleGameSelection} />
                <label htmlFor="Fire Emblem"> Fire Emblem &nbsp;&nbsp;</label>

                <input type="radio" id="Pokemon" name="Game" value="Pokemon" checked={selectedGame === "Pokemon"} onChange={handleGameSelection} />
                <label htmlFor="Pokemon"> Pokemon &nbsp;&nbsp;</label>

                <input type="radio" id="Animal Crossing" name="Game" value="Animal Crossing" checked={selectedGame === "Animal Crossing"} onChange={handleGameSelection} />
                <label htmlFor="Animal Crossing"> Animal Crossing &nbsp;&nbsp;</label>

                <input type="radio" id="Metroid" name="Game" value="Metroid" checked={selectedGame === "Metroid"} onChange={handleGameSelection} />
                <label htmlFor="Metroid"> Metroid &nbsp;&nbsp;</label>

                <input type="radio" id="Kirby" name="Game" value="Kirby" checked={selectedGame === "Kirby"} onChange={handleGameSelection} />
                <label htmlFor="Kirby"> Kirby &nbsp;&nbsp;</label>

                <input type="radio" id="Monster Hunter" name="Game" value="Monster Hunter" checked={selectedGame === "Monster Hunter"} onChange={handleGameSelection} />
                <label htmlFor="Monster Hunter"> Monster Hunter &nbsp;&nbsp;</label>

                <input type="radio" id="Pikmin" name="Game" value="Pikmin" checked={selectedGame === "Pikmin"} onChange={handleGameSelection} />
                <label htmlFor="Pikmin"> Pikmin &nbsp;&nbsp;</label>

                <div className="grid-container">
                    {filteredAmiibos.map((amiibo, index) => (
                        <div key={index} className="card"style={{border: `2px solid ${gameBorderColors[amiibo.Game] || "cyan"}`
                        }}>
                            {amiibo.figure_image ? (
                                <img
                                    src={"http://localhost:1337" + amiibo.figure_image[0]?.formats?.thumbnail.url}
                                    alt={amiibo.name}
                                    className="card-image"
                                />
                            ) : null}
                            <h2>{amiibo.name}</h2>
                            <p>{amiibo.Game}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
