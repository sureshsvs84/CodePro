const captalize = {
    captalizeWord(word) {
        word = word.toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
        return word;
    }
};
export default captalize;