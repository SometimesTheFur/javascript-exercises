const caesar = (str, shift) => {
        return str
            .split("")
            .map(stringA => shifted(stringA, shift))
            .join("");
    };
    const cypherSet = cypher => (cypher < 97 ? 65 : 97);

    const mod = (n,m) => (n % m + m) % m;

    const shifted = (stringA, shift) => {
        const cypher = stringA.charCodeAt();
        
        if ((cypher >= 65 && cypher <= 90) || (cypher >= 97 && cypher <= 122)) {
            return String.fromCharCode(
                mod(cypher + shift - cypherSet(cypher), 26) + cypherSet(cypher)
            );
        }
        return stringA;
    };

module.exports = caesar
