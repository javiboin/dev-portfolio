import Music from "../components/Music";
import Movies from "../components/Movies";

const Interests = () => {
    return (
        <div className="interests">
            <h1>Interests</h1>
            <p>Sección para mostrar intereses /Hobbies.</p>
            <Music />
            <Movies />
        </div>
    );
};

export default Interests;