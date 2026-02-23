import { Link } from "react-router-dom";
import "./homePage.css";

export default function HomePage() {
    return (
        <div className="home-container">
            <h1>Welcome Home</h1>
            <p>This is the homepage</p>
            <button onclick={() => alert('Button Clicked!')}>get Started</button>
            <Link to="/login">Login</Link>

        </div>
    );
}