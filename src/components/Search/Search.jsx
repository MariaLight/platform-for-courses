export const Search = () => {
    return (
        <input type="search" name='search' value={searchValue} onChange={({ target }) => handleSearchValueChange(target.value)}
            placeholder="Поиск по задаче..."
            className={styles.todo__search}
        />
    )
}