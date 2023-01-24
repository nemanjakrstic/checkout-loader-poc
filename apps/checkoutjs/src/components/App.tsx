import { useState } from "preact/hooks";
import { CheckoutButton } from "../types/CheckoutButton";
import { queryButtons } from "../utils/queryButtons";
import { Button } from "./Button";
import { Frame } from "./Frame";

export const App = () => {
    const buttons = queryButtons();
    const [selectedButton, setSelectedButton] = useState<CheckoutButton>();

    const handleButtonClick = (params: CheckoutButton) => {
        setSelectedButton(params);
    };

    return (
        <>
            {buttons.map((button) => (
                <Button element={button} onClick={handleButtonClick} />
            ))}

            {selectedButton ? <Frame button={selectedButton} /> : null}
        </>
    );
};
