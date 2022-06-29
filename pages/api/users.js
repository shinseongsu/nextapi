import https from 'https';
import axios from 'axios';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const { apiUrl } = req.body;
  console.log(apiUrl);

  try {
    let httpsAgent = new https.Agent({
      rejectUnauthorized: false,
      cert: fs.readFileSync('/Users/bwc/Downloads/test/vercel/nextapi/ceriticates/certificate_sandbox.pem'),
      key: fs.readFileSync('/Users/bwc/Downloads/test/vercel/nextapi/ceriticates/certificate_sandbox.key')
    })

    console.dir(fs.readFileSync('/Users/bwc/Downloads/test/vercel/nextapi/ceriticates/certificate_sandbox.pem'));
    console.dir(fs.readFileSync('/Users/bwc/Downloads/test/vercel/nextapi/ceriticates/certificate_sandbox.key'));

    let response = await axios.post(
      apiUrl,
      {
        merchantIdentifier: 'merchant.kr.co.bluewalnut.CreamPayTest',
        domainName: "tookmoe.bluewalnut.co.kr",
        displayName: "bluewalnut.took"
      },
      {
        httpsAgent
      }
    );

    console.log(response);
    res.status(200).json(response.data);
  } catch (e) {
    console.log(e);
    res.status(200).json({ text: e })
  }

  
}
