//FROM: https://primereact.org/slider/#input

import React, { useState } from "react";
import { Slider } from "primereact/slider";
import { InputText } from "primereact/inputtext";

export function InputSlider({placeholder, value, setValue}) {
	return (
		<div className="card flex justify-content-center">
			<div className="w-14rem">
				<InputText placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} className="w-full" />
				<Slider value={value} onChange={(e) => setValue(e.value)} className="w-full" />
			</div>
		</div>
	)
}

