import { useNavigate } from 'react-router-dom';

export default function Navbar() {


    const navigate = useNavigate()

    function navDramaHome() {
        navigate(`/`)
    }

    function navDramaAcademics() {
        navigate(`/academics`)
    }

    function navDramaPersonalPursuits() {
        navigate("/perspursproj")
    }

    function navDramaPassions(){
        navigate('/passions')
    }


return (
    
    <div>

        <button onClick={navDramaHome}>
            Home
        </button>
        
        <button onClick={navDramaAcademics}>
            Academics
        </button>

        <button onClick={navDramaPersonalPursuits}>
            Personal Pursuits and Projects
        </button>

        <button onClick={navDramaPassions}>
            Passions
        </button>



    </div>

)
}