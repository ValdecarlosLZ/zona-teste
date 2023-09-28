
import React, { useState } from "react";
import { MultiStateCheckbox } from 'primereact/multistatecheckbox';

export default function BasicDemo() {
    const [value, setValue] = useState('public');
    const options = [
        { value: 'Ativo', icon: 'pi pi-lock-open' },
        { value: 'Inativo', icon: 'pi pi-lock' }
    ];

    return (
        <div className="card flex flex-column align-items-center gap-3">
            <MultiStateCheckbox value={value} onChange={(e) => setValue(e.value)} options={options} optionValue="value" />
            <span>{value || 'Sem função'}</span>
        </div>
    );
}
        
