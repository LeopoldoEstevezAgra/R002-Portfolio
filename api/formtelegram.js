import axios from 'axios';
const insertTo = async (msg) => {
    const url = `https://api.telegram.org/bot${process.env.TELEGRAMAPI}/sendMessage?chat_id=${process.env.TELEGRAMCHATID}&text=test`;

    const res = await axios.get(url);
    console.log(res)
    
    
}
export default async function handler(request, response) {
    try {
        const { email, content } = request.body;

        if (!email || !content) { throw err }

        const msg = `${email}-${content}`;

        await insertTo(msg);


        response.status(200).send();

    } catch (e){
        console.log(e);
        response.status(400).send(e);

    } 
}
