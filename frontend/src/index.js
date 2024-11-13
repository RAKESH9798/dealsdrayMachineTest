import ReactDOM from "react-dom/client"
import App from "./App"

const rootContaimer = document.querySelector(".root");
const root = ReactDOM.createRoot(rootContaimer);

if(root){
    root.render(
        <App/>
    )
}else{
    console.log("Root Element is not found.");
}
