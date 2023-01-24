import { CloseIcon } from "@xola/ui-kit";

const Index = () => {
    return (
        <div className="relative ml-auto h-screen max-h-screen max-w-2xl bg-white p-4">
            <button className="text-secondary absolute top-2 -left-10 h-8 w-8 rounded-full bg-white">
                <CloseIcon />
            </button>

            <main className="max-h-full overflow-y-auto">Checkout App</main>
        </div>
    );
};

export default Index;
