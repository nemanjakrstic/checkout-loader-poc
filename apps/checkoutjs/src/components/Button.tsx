import { createPortal } from "preact/compat";
import { CheckoutButton } from "../types/CheckoutButton";

interface ButtonProps {
    element: HTMLDivElement;
    onClick: (params: CheckoutButton) => void;
}

export const Button = ({ element, onClick }: ButtonProps) => {
    const handleClick = () => {
        onClick({
            seller: element.dataset.seller!,
            button: element.dataset.button,
        });
    };

    return createPortal(
        <button
            style={{
                borderRadius: 6,
                padding: "16px 32px",
                backgroundColor: "green",
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
            }}
            onClick={handleClick}
        >
            Book Now
        </button>,
        element,
    );
};
