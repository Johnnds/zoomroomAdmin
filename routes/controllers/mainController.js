const fs = require('fs');
const path = require('path');
const axios = require('axios');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
    apiZoom: (req, res) =>{

        //Controlador para la api de zoom//
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://api.zoom.us/v2/meetings/97566249644',
            headers: { 
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6ImpKWGJjRkZnU2RXbG1QRDZTRkZxb0EiLCJleHAiOjE2ODY5NDIwNDMsImlhdCI6MTY4NjMzNzI0NH0.47umTYMeE-ACNHcNK5pvT_0zoRWObFGz8v4UK9Amuwc', 
              'Cookie': '__cf_bm=.AIXbkQM2k9Hs5EVFNpUVUfkVz7fHyt27TtR9ancut0-1686338522-0-Aems0nvr8cHZjLk2mr2QbV9efavXOz1azuEQ7ITIcb2vHWmB7iPoHL5x3dtCdqAsn7fTqExuZLa+ftMf44YNGDM=; _zm_mtk_guid=25b3b3dee050436aaf7abc5a128fbbc7; _zm_visitor_guid=25b3b3dee050436aaf7abc5a128fbbc7; cred=14FC8FF03DA3CE17955526730C6931C3'
            }
          };
          
          axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
    }
}