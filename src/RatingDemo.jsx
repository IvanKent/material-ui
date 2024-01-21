import { Rating } from "@mui/material";
import { useState } from "react";
export default function RatingDemo(){
    const [score, setScore] = useState(1)
    return (
        <div>
            <h1>Rating Demo Current Rating: {score}</h1>
            <Rating
                name="simple-controlled"
                value={score}
                onChange={(event, newValue) => {
                    setScore(newValue);
                }}
                />
        </div>
    )
}