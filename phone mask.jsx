
import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";

export default function MaskDemo() {
    return (
        <div className="card p-fluid flex flex-wrap gap-3">

            <div className="flex-auto">
                <label htmlFor="phone" className="font-bold block mb-2">Phone</label>
                <InputMask id="phone" mask="(99) 99999-9999" placeholder="(99) 99999-9999"></InputMask>
            </div>
        </div>
    )
}
        
