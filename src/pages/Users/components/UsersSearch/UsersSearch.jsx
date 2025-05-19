import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersSelector } from "../../../../selectors";
import { debounce } from '../../../../utils';

export const UsersSearch = ({ users, setUsers, searchValue, setSearchValue }) => {

    const dispatch = useDispatch();

    const debouncedResults = useCallback(
        debounce((results) => {
            setUsers(results);
        }, 300),
        []
    )

    useEffect(() => {
        if (searchValue) {
            let results = [];
            results = users.filter((item) => {
                const preparedSearchValue = searchValue.trim().toLowerCase();
                return (item.email.trim().toLowerCase().includes(preparedSearchValue) || item?.name?.trim().toLowerCase().includes(preparedSearchValue));
            });
            debouncedResults(results);
        }
    }, [searchValue]);

    return (
        <div className="search__wrapper">
            <input type="search" name='search' value={searchValue} onChange={({ target }) => setSearchValue(target.value)}
                placeholder="Поиск по пользователям..."
                className="search__input input-reset"
            />
        </div>
    );
}