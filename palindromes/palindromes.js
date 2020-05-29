const palindromes = (string) => {
    const raw = string.toLowerCase().replace(punctuation, '');
        return raw
            .split("")
            .reverse()
            .join("") === raw       
};
    const punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s+/]/g;

module.exports = palindromes