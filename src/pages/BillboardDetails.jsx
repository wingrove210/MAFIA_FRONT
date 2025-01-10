import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function BillboardDetails() {
    const { id } = useParams(); // Получаем ID из URL
    const [card, setCard] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/billboards/${id}`) // Запрос к API с использованием ID
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch card details");
                }
                return response.json();
            })
            .then((data) => {
                setCard(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold">{card.name}</h1>
            <p className="mt-4 text-lg">{card.description}</p>
            <img src={card.image_url || "placeholder.jpg"} alt={card.name} className="mt-4" />
        </div>
    );
}

export default BillboardDetails;
