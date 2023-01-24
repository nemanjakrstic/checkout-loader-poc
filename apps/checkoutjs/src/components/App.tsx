import { useState } from "preact/hooks";
import { CheckoutButton } from "../types/CheckoutButton";
import { Button } from "./Button";
import { Frame } from "./Frame";

export const App = () => {
    const buttons = getBookingButtons();
    const [selectedButton, setSelectedButton] = useState<CheckoutButton>();

    const handleButtonClick = (params: CheckoutButton) => {
        setSelectedButton(params);
    };

    return (
        <>
            {buttons.map((button) => (
                <Button button={button} onClick={handleButtonClick} />
            ))}

            {selectedButton ? <Frame /> : null}
        </>
    );
};

const getBookingButtons = () => {
    return [...document.querySelectorAll(".xola-checkout")] as HTMLDivElement[];
};
