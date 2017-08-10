import _ from "lodash";
import styles from "./src/css/main.css";

function component() {
    var element = document.createElement("div");
    element.innerHTML = _.join(['Hello', 'World!'], ' ');
    return element;
}
document.body.appendChild(component());