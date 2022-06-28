// Fake users data
import https from 'https';
import axios from 'axios';
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { apiUrl } = req.query;

  let httpsAgent = new https.Agent({
    rejectUnauthorized: false,
    cert: fs.readFileSync(
      path.join(__dirname, '/ceriticates/certificate_sandbox.pem')
    ),
    key: fs.readFileSync(
      path.join(__dirname, '/ceriticates/certificate_sandbox.key')
    )
  });

  let response = axios.post(
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


  res.status(200).json(response)
}
