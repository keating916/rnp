import axios from 'axios'

export default async function email(req, res) {
    if(req.method !== "POST") {
        res.status(403).send("FORBIDDEN")
    }else {

        //uses axios to send contact form information to email client without compromising access token since it is from the server
        const user_ID = "user_q4A2w1PBTlDYM00tFJiQF"        
        const serviceID = 'Portfolio';
        const templateID = 'Portfolio';
        const template_params = req.body.params
        const access_token = '65c2dec2ff37a2ffd2ae3a5f29ceac2e'
        var data = {
            service_id: serviceID,
            template_id: templateID,
            user_id: user_ID,
            accessToken: access_token,
            template_params: template_params
        };
        
        return new Promise(resolve => {
            axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
            .then(response => {
                res.send(response.data)
            })
            .catch(error => {
                console.log(error.response.data)
                res.status(500).send("Error")
            })
        })
    }
}