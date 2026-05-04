export async function fetchAllCharacters() {
    const firstRes = await fetch('https://rickandmortyapi.com/api/character/');
    const firstData = await firstRes.json();

    const pageNumbers = Array.from({ length: firstData.info.pages - 1 }, (_, i) => i + 2);
    const restData = await Promise.all(
        pageNumbers.map(p =>
            fetch(`https://rickandmortyapi.com/api/character/?page=${p}`).then(r => r.json())
        )
    );

    return [firstData, ...restData].reduce((acc, d) => [...acc, ...d.results], []);
}
