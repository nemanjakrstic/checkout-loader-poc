import { CheckoutButton } from "../types/CheckoutButton";

interface FrameProps {
    button: CheckoutButton;
}

export const Frame = ({ button }: FrameProps) => {
    console.log("Opening checkout for button", button);

    return (
        <iframe
            style={{
                position: "fixed",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
            }}
            frameBorder={0}
            src="http://localhost:3030/"
        />
    );
};
