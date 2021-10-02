const TechCard = ({ tech }) => {
    return (
        <div>
            <ul>
                <li>{tech.title}</li>
                <li>{tech.status}</li>
            </ul>
        </div>
    )
}

export default TechCard;