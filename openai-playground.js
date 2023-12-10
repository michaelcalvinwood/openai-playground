const axios = require('axios')

const url = 'https://fusaion.nyc3.digitaloceanspaces.com/accounts/10aa6d80-d823-4d49-ad76-bb9a2fd04180/brains/2e76c0d3-ddf9-4658-a133-129113fcd3f6/39f01fe3-930a-417f-a2ba-dbd0256a03c2/edited.md';

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
    console.log(content)
}

doStuff()
