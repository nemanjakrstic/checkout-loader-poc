import "@xola/ui-kit/index.css";
import "@xola/ui-kit/build/style.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default App;
