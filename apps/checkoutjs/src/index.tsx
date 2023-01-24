import { App } from "./components/App";
import { render } from "preact";

const root = document.createElement("div");
document.body.appendChild(root);
render(<App />, root);
