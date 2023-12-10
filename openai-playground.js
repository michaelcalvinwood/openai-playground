const axios = require('axios')
const ai = require('./utils/ai');
const nlp = require('./utils/nlp');

let url;
url = 'https://fusaion.nyc3.digitaloceanspaces.com/accounts/10aa6d80-d823-4d49-ad76-bb9a2fd04180/brains/2e76c0d3-ddf9-4658-a133-129113fcd3f6/39f01fe3-930a-417f-a2ba-dbd0256a03c2/edited.md';
url = 'https://fusaion.nyc3.digitaloceanspaces.com/accounts/10aa6d80-d823-4d49-ad76-bb9a2fd04180/brains/af2f0efe-39b6-4aec-91d5-0698f211e753/f9dcd0c6-ec14-48b0-a8b1-527ea9b21cd8/edited.md';
const getContent = async () => {
    try {
        const response = await axios({
            url,
            method: 'get'
        })
        return response.data;
    } catch(err) {
        console.error(err);
        return false;
    }
}

const doStuff = async () => {
    const content = await getContent();

    // const factsAndQuotes = await ai.getFactsAndQuotes(content);
    // console.log(factsAndQuotes)

    const explanation = await ai.explainToHighScholer(content);
    console.log("\n\n\n", explanation)
}

doStuff()
