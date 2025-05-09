import { useSelector } from "react-redux";
import { server } from "../bff/server";
import { selectUserSession } from "../selectors";
import { useCallback } from "react";


export const useServerRequest = (operation, ...params) => {
    const session = useSelector(selectUserSession);

    return useCallback((operation, ...params) => {
        const request = ['register', 'authorize'].includes(operation)
            ? params
            : [session, ...params];

        return server[operation](...request);
    }, [session]);
};