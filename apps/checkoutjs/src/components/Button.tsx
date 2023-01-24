import { createPortal } from "preact/compat";
import { CheckoutButton } from "../types/CheckoutButton";

interface ButtonProps {
    button: HTMLDivElement;
    onClick: (params: CheckoutButton) => void;
}

export const Button = ({ button, onClick }: ButtonProps) => {
    const handleClick = () => {
        onClick({
            seller: button.dataset.seller!,
            button: button.dataset.button,
        });
    };

    return createPortal(
        <button
            style={{ borderRadius: 8, padding: "8px 16px", backgroundColor: "green", color: "white" }}
            onClick={handleClick}
        >
            Book Now
        </button>,
        button,
    );
};
