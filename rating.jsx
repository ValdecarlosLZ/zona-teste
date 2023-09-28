import React, { useState } from "react";
import { Rating } from "primereact/rating";

export default function TemplateDemo() {
    const [value, setValue] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Rating value={value} onChange={(e) => setValue(e.value)}
                onIcon={<img src="https://raw.githubusercontent.com/ValdecarlosLZ/Imagens/main/feliz.png" alt="custom-image-active" width="25px" height="25px" />}
                offIcon={<img src="https://raw.githubusercontent.com/ValdecarlosLZ/Imagens/main/triste.png" alt="custom-image" width="25px" height="25px" />}
            />
        </div>
    );
}
        
