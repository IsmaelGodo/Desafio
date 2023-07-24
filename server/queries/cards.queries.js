const cards_queries = {
    getAllCards: `SELECT c.*, i.nombre AS nombre_ilustrador
    FROM card AS c
    JOIN ilustrator AS i ON c.id_ilu = i.id_ilu;`,
    getCardsByNombre: `SELECT c.*, i.nombre AS nombre_ilustrador
    FROM card AS c
    JOIN ilustrator AS i ON c.id_ilu = i.id_ilu
    WHERE LOWER(c.nombre) = LOWER($1)
    ORDER BY c.nombre DESC;`,
    getAllIlust:`SELECT * from ilustrator`,
    getIlustByNombre:`SELECT nombre, cif, direccion, id_ilu
    FROM ilustrator
    WHERE nombre = $1;`,
    createIlust: `INSERT INTO ilustrator (nombre, cif, direccion) VALUES ($1, $2, $3)`,
    getCardsByColor: `SELECT c.*, i.nombre AS nombre_ilustrador
    FROM card AS c
    JOIN ilustrator AS i ON c.id_ilu = i.id_ilu
    WHERE LOWER(c.color) = LOWER($1)
    ORDER BY c.nombre DESC;`,
    createCard:`INSERT INTO card (nombre, descripcion, color, imagen, id_ilu) VALUES ($1, $2, $3, $4, $5)`
}
module.exports = cards_queries;