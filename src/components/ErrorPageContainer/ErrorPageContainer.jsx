import { H1 } from "../H1/H1";

export const ErrorPageContainer = ({ children, error }) => {
    return error ? <div>
        <H1>Ошибка</H1>
        <div>{error}</div>
    </div> : <>{children}</>;
}