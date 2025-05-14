import { useNavigate } from "react-router-dom";

export const GoBackButton = () => {
    const navigate = useNavigate();

    return (
        <button className="btn-reset go-back" onClick={() => navigate(-1)}>⟵ Назад</button>
    )
}