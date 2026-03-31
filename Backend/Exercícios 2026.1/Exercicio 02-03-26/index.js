import express from 'express'; // <- Agora o type de JS que usamos é module :)
const app = express();

app.use(express.json());

app.post('/utils/sum-array', (req, res) => {
    const { nums } = req.body;
    if (nums && Array.isArray(nums)) { // <- Checa se o body continha o campo e também se é um array :)
        let soma = 0;
        let apenasNumeros = nums.every(num => typeof num === 'number'); // <- Checa se todos os itens do array são do tipo 'number'
        if (!apenasNumeros) return res.status(400).send("O array 'nums' deve conter apenas números.");

        for (let i = 0; i < nums.length; i++) {
            soma += nums[i];
        }
        return res.status(200).send(soma);
    }
    return res.status(400).send("O campo 'nums' não existe ou não é um array.");
})

app.post('/utils/max-array', (req, res) => {
    const { nums } = req.body;
    if (nums && Array.isArray(nums)) {
        let apenasNumeros = nums.every(num => typeof num === 'number');
        if (!apenasNumeros) return res.status(400).send("O array 'nums' deve conter apenas números.");

        let max = Math.max(...nums); // <- '...' serve para passar os itens do array como itens separados :)
        return res.status(200).send(max);
    }
    return res.status(400).send("O campo 'nums' não existe ou não é um array.");
})

app.post('/utils/average', (req, res) => {
    const { nums } = req.body;
    if (nums && Array.isArray(nums)) {
        let avg = 0;
        let apenasNumeros = nums.every(num => typeof num === 'number');
        if (!apenasNumeros) return res.status(400).send("O array 'nums' deve conter apenas números.");

        for (let i = 0; i < nums.length; i++) {
            avg += nums[i];
        }
        avg /= nums.length;
        return res.status(200).send(avg);
    }
    return res.status(400).send("O campo 'nums' não existe ou não é um array.");
})

app.post('/utils/sort-array', (req, res) => {
    const { nums } = req.body;
    if (nums && Array.isArray(nums)) {
        let apenasNumeros = nums.every(num => typeof num === 'number');
        if (!apenasNumeros) return res.status(400).send("O array 'nums' deve conter apenas números.");

        // Compara 'a' e 'b', se a subtração for positiva então 'a' é maior que 'b', se for negativo então é menor e se for 0 são iguais :D
        let sortedNums = nums.sort((a, b) => a - b);
        
        return res.status(200).send(sortedNums);
    }
    return res.status(400).send("O campo 'nums' não existe ou não é um array.");
})

app.post('/utils/remove-duplicates', (req, res) => {
    const { nums } = req.body;
    if (nums && Array.isArray(nums)) {
        let apenasNumeros = nums.every(num => typeof num === 'number');
        if (!apenasNumeros) return res.status(400).send("O array 'nums' deve conter apenas números.");

        // Set é uma estrutura do javascript que não permite itens duplicados, assim ele automaticamente remove qualquer duplicação do array
        // Então usamos '...' para restaurar esse Set como um Array normal :D
        let newNums = [...new Set(nums)];
        
        return res.status(200).send(newNums);
    }
    return res.status(400).send("O campo 'nums' não existe ou não é um array.");
})

app.post('/utils/count-items', (req, res) => {
    const { nums } = req.body;
    if (nums && Array.isArray(nums)) {
        let apenasNumeros = nums.every(num => typeof num === 'number');
        if (!apenasNumeros) return res.status(400).send("O array 'nums' deve conter apenas números.");
        return res.status(200).send(nums.length);
    }
    return res.status(400).send("O campo 'nums' não existe ou não é um array.");
})

app.get('/utils/reverse-string', (req, res) => {
    const { str } = req.query;
    if (str && typeof str === 'string') {
        let reversed = str.trim() // <- trim vai remover espaços em branco que possam estar no começo ou final da string!!!
        reversed = reversed.split('') // <- transforma a string em um array de caracteres, pois em js strings não podem ser modificadas :/
        reversed = reversed.reverse();
        reversed = reversed.join(''); // <- junta os caracteres do array em uma string dnv :D
        return res.status(200).send(reversed);
    }
    return res.status(400).send("O campo 'str' não existe ou não é uma string.");
})

app.post('/utils/count-words', (req, res) => {
    const { str } = req.body;
    if (str && typeof str === 'string') {
        let words = str.trim().split(/\s+/); // <- transforma a string em um array, usando espaços em branco como criterio de separação
        return res.status(200).send(words.length);
    }
    return res.status(400).send("O campo 'str' não existe ou não é uma string.");
})

app.get('/utils/palindrome', (req, res) => {
    const { str } = req.query;
    if (str && typeof str === 'string') {
        let trimStr = str.trim().toLowerCase();
        let reversed = trimStr.split('').reverse().join(''); // <- mesma lógica do utils de reverse-string, mas de uma vez só ;)
        let isPalindrome = trimStr === reversed;
        return res.status(200).send(isPalindrome ? "A string é um palíndromo" : "A string não é um palíndromo");
    }
    return res.status(400).send("O campo 'str' não existe ou não é uma string.");
})

app.get('/utils/camelcase', (req, res) => {
    const { str } = req.query;
    if (str && typeof str === 'string') {
        let camelCase = "";
        camelCase = str.toLowerCase();
        camelCase = camelCase.split(/[\s_-]+/) // <- transforma a string em um array, usando ' ' (espaço), '_' ou '-' como criterio de separação
        camelCase = camelCase.map((word, index) => {
            // index === 0 <- pula a primeira palavra
            // word.charAt(0) <- pega a primeira letra da palavra
            // toUpperCase() <- transforma essa letra especifica em maiuscula
            // + word.slice(1) <- concatena a primeira letra maiuscula com o resto da palavra (slice apartir da segunda letra)
            return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1) 
        })
        camelCase = camelCase.join('');
        return res.status(200).send(camelCase);
    }
    return res.status(400).send("O campo 'str' não existe ou não é uma string.");
})

app.get('/utils/circle-area', (req, res) => {
    const { raio } = req.query;
    let parsedRaio = parseFloat(raio);
    if (!isNaN(parsedRaio) && parsedRaio >= 0) {
        let area = Math.PI * (parsedRaio ** 2);
        return res.status(200).send(area.toFixed(2));
    }
    return res.status(400).send("O campo 'raio' não existe ou não é um número.");
})

app.get('/utils/fibonacci', (req, res) => {
    const { num } = req.query;
    let parsedNum = parseInt(num);
    if (!isNaN(parsedNum) && parsedNum >= 0) {
        let fib = fibonacci(parsedNum);
        return res.status(200).send(fib);
    }
    return res.status(400).send("O campo 'num' não existe ou não é um número.");
})

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

app.listen(3000);