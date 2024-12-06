import axios from "axios";
import { useState } from "react";

export async function getStaticProps() {
    const data = await axios.get('http://localhost:3000/api/skylanders');
    const skylanderList = data.data
    return {
        props: { skylanderList }
    };
}

export default function Skylanders({ skylanderList }) {
    let filteredSkylanders;
    const [selectedGame, setSelectedGame] = useState("All");

    const handleGameSelection = (event) => {
        setSelectedGame(event.target.value);
    };

    if (selectedGame === "All") {
        filteredSkylanders = skylanderList.data.slice().sort((a, b) => a.name.localeCompare(b.name));
    } else {
        filteredSkylanders = skylanderList.data.filter(skylander => skylander.game === selectedGame).slice().sort((a, b) => a.name.localeCompare(b.name));
    }
    const gameBorderColors = {
        "Trap Team": "red",
        "Giants": "orange",
        "Spyros Adventure": "green",
        "Swap Force": "blue",
        "Magic Item": "silver",
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
                .type_image_css {
                    display: flex;
                    align-items: center;
                    justify-content: center;
}
            `}</style>
            <div>
                <h1 style={{ textAlign: 'center', color: '#e0e0e0' }}>Skylander List</h1>
                
                <input type="radio" id="All" name="Game" value="All" checked={selectedGame === "All"} onChange={handleGameSelection} />
                <label htmlFor="All"> All &nbsp;&nbsp;</label>

                <input type="radio" id="Spyros Adventure" name="Game" value="Spyros Adventure" checked={selectedGame === "Spyros Adventure"} onChange={handleGameSelection} />
                <label htmlFor="Spyros Adventure"> Spyros Adventure &nbsp;&nbsp;</label>

                <input type="radio" id="Giants" name="Game" value="Giants" checked={selectedGame === "Giants"} onChange={handleGameSelection} />
                <label htmlFor="Giants"> Giants &nbsp;&nbsp;</label>

                <input type="radio" id="Swap Force" name="Game" value="Swap Force" checked={selectedGame === "Swap Force"} onChange={handleGameSelection} />
                <label htmlFor="Swap Force"> Swap Force &nbsp;&nbsp;</label>

                <input type="radio" id="Trap Team" name="Game" value="Trap Team" checked={selectedGame === "Trap Team"} onChange={handleGameSelection} />
                <label htmlFor="Trap Team"> Trap Team &nbsp;&nbsp;</label>

                <input type="radio" id="Magic Item" name="Game" value="Magic Item" checked={selectedGame === "Magic Item"} onChange={handleGameSelection} />
                <label htmlFor="Magic Item"> Magic Item &nbsp;&nbsp;</label>

                <div className="grid-container">
                    {filteredSkylanders.map((skylander, index) => (
                        <div key={index} className="card"style={{border: `2px solid ${gameBorderColors[skylander.game] || "cyan"}`
                        }}>
                            {skylander.figure_image ? (
                                <img
                                    src={"http://localhost:1337" + skylander.figure_image[0]?.formats?.thumbnail.url}
                                    alt={skylander.name}
                                    className="card-image"
                                />
                            ) : null}
                            <h2 className="type_image_css">{skylander.name}&nbsp;
                            {skylander.type_image && skylander.type_image[0] && skylander.type_image[0]?.formats?.thumbnail?.url ? (
                                <img
                                    src={"http://localhost:1337" + skylander.type_image[0]?.formats?.thumbnail.url}
                                    width={30}
                                    height={30}
                                    alt={skylander.element}
                                />
                            ) : null}
                            </h2>
                            <p>{skylander.game}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
