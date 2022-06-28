// Fake users data
import https from 'https';
import axios from 'axios';
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { apiUrl } = req.body;

  try {
  let httpsAgent = new https.Agent({
    rejectUnauthorized: false,
    cert: `-----BEGIN CERTIFICATE-----
    MIIGLTCCBRWgAwIBAgIQXa7FtjFZopc0n2oQK4KVUDANBgkqhkiG9w0BAQsFADB1
    MUQwQgYDVQQDDDtBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9ucyBD
    ZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTELMAkGA1UECwwCRzMxEzARBgNVBAoMCkFw
    cGxlIEluYy4xCzAJBgNVBAYTAlVTMB4XDTIyMDYyODA2MTk0MVoXDTI0MDcyNzA2
    MTk0MFowga8xNjA0BgoJkiaJk/IsZAEBDCZtZXJjaGFudC5rci5jby5ibHVld2Fs
    bnV0LkNyZWFtUGF5VGVzdDFLMEkGA1UEAwxCQXBwbGUgUGF5IE1lcmNoYW50IElk
    ZW50aXR5Om1lcmNoYW50LmtyLmNvLmJsdWV3YWxudXQuQ3JlYW1QYXlUZXN0MRMw
    EQYDVQQLDApLOTlNQjg0NllCMRMwEQYDVQQKDApCbHVld2FsbnV0MIIBIjANBgkq
    hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwbBVEUKK38TdYZM+B2R7ui7WPYEm462G
    HJsK0ukPEUNKlal1US/7nTo4tzAx2TiL37kYB0Kaw9kkzcqoXjxzgdAbvSm0R2vy
    Kqj6uqMIVIG8Gptl6EpFbMRbdp1JMNbSuK+7UbkyaSBDIJ1UCq5pdYDAIX3+r/Z0
    4KlZI5OEJOyxtI9NlOTFEC+Q23IhI7hZjD0w+6Va8PZM3ajJ+e7Qkqdz1wjsxFRK
    /FgmtmnYem0LOO9uzjjjlsAEqVz4l7ecKbtaN1yEWm44rEYy8h6Jr2jD1IWj+XB9
    xk7Kc+0MSzfAmaAHaz23DLdesDjCgvzC8c2vXo6f+YQbcUOb0/4l/wIDAQABo4IC
    fDCCAngwDAYDVR0TAQH/BAIwADAfBgNVHSMEGDAWgBQJ/sAVkPmvZAqSErkmKGMM
    l+ynsjBwBggrBgEFBQcBAQRkMGIwLQYIKwYBBQUHMAKGIWh0dHA6Ly9jZXJ0cy5h
    cHBsZS5jb20vd3dkcmczLmRlcjAxBggrBgEFBQcwAYYlaHR0cDovL29jc3AuYXBw
    bGUuY29tL29jc3AwMy13d2RyZzMwOTCCAS0GA1UdIASCASQwggEgMIIBHAYJKoZI
    hvdjZAUBMIIBDTCB0QYIKwYBBQUHAgIwgcQMgcFSZWxpYW5jZSBvbiB0aGlzIENl
    cnRpZmljYXRlIGJ5IGFueSBwYXJ0eSBvdGhlciB0aGFuIEFwcGxlIGlzIHByb2hp
    Yml0ZWQuIFJlZmVyIHRvIHRoZSBhcHBsaWNhYmxlIHN0YW5kYXJkIHRlcm1zIGFu
    ZCBjb25kaXRpb25zIG9mIHVzZSwgY2VydGlmaWNhdGUgcG9saWN5IGFuZCBjZXJ0
    aWZpY2F0aW9uIHByYWN0aWNlIHN0YXRlbWVudHMuMDcGCCsGAQUFBwIBFitodHRw
    czovL3d3dy5hcHBsZS5jb20vY2VydGlmaWNhdGVhdXRob3JpdHkvMBMGA1UdJQQM
    MAoGCCsGAQUFBwMCMB0GA1UdDgQWBBTwnSg4MNUEK3UjiZTwec1Ux+AzNjAOBgNV
    HQ8BAf8EBAMCB4AwTwYJKoZIhvdjZAYgBEIMQDFGQTY4NDc3MDY1QjMzNDA3REZD
    NkUzQkQ0RURCNjEzREE1NDk5MDUwMTc1MTY1MzFCRDU3OEVERkQyRDE2Q0IwDwYJ
    KoZIhvdjZAYuBAIFADANBgkqhkiG9w0BAQsFAAOCAQEAwXHuOk5Ere3LyrXxnN6R
    NgqMKIyE55KYxcGfh1AiPVHRRqRsKqpz88qF3yfW/9VPhhIIQOEKLBZ5aATJJL00
    b8dnFF7G2zheyhCeRrw6TckUXKkoE/IAgTsVDJQ3NaF47ivvLitMMK1Awk5BD4Wo
    p8gKg6ux5hWGnSFX2hPIlcrhMl74LQv2J8Z0Pz02dgW5jkS1FsU+rXkkJVx/g06V
    8Kh6Ob/mmLzXZenDtBEguViJsNz3U9l3rY5bQmIxuh097K1wBT9pXdoK7hrQCoZa
    BDY5tLLLPhZjtb1GUjJfNZGkYmWhIrvuArmwrc3pkkMeyjZGYqTFlbM8r4jhSnfd
    kg==
    -----END CERTIFICATE-----
    `,
    key: `-----BEGIN PRIVATE KEY-----
    MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDBsFURQorfxN1h
    kz4HZHu6LtY9gSbjrYYcmwrS6Q8RQ0qVqXVRL/udOji3MDHZOIvfuRgHQprD2STN
    yqhePHOB0Bu9KbRHa/IqqPq6owhUgbwam2XoSkVsxFt2nUkw1tK4r7tRuTJpIEMg
    nVQKrml1gMAhff6v9nTgqVkjk4Qk7LG0j02U5MUQL5DbciEjuFmMPTD7pVrw9kzd
    qMn57tCSp3PXCOzEVEr8WCa2adh6bQs4727OOOOWwASpXPiXt5wpu1o3XIRabjis
    RjLyHomvaMPUhaP5cH3GTspz7QxLN8CZoAdrPbcMt16wOMKC/MLxza9ejp/5hBtx
    Q5vT/iX/AgMBAAECggEBAJJbnkxGjg39ApQi4TJQ2bWcgsNC/pH4o2imN42cEoim
    4oso27+XlHgAcK7sOh68PeW2RdPmnm/ze34N7yAWaenjybIs+08k4H8f5SZ232qM
    BgnM9zqKNN+1mK+OtqmzCtQH5nIgkVkiydaxS7ouhP4HZidov7VTdIn3LaZWZ/pF
    lkfdK8nytnqpi3BsgXyoFAt+kDdNu3R1lElmUvcEoHlCYLQRq6PIdsRVUFljnxKB
    d2XnkK3mzcqInjV7HMBwCTMEn9DLDOm7/NYr/9ZpMVbpG58hE0XSElMUGuZF0PF+
    IULuHtMBR56dN2nlAZ+5ZIHKq20EuNI1NHpm8Zjn7AECgYEA+kAjG2uWNU9YD35Q
    k2BhoQ0Y5mvt48LOxUmg0Iy09o8+eS5+Eo2euVyInBYRWSCL1yLldvlPU7PdrrMM
    FK+ZN0qLPV+y4KCRJywyr8azGCFQwHYp6Y+aP5uI/1zXBCXLMUVGXER4DyaHURAo
    L6SZzZKkK4hJp3MWxGrgBW2a7QECgYEAxiOGKJeWtCjZtPxcHQhc843nCP4/3Keu
    n5R4+df3XXuLASN1e8gVSHEcGNqoKop61CpkIU20JJKR5VHr7iei8JiF29MRVvIc
    zeobZp84Pzb3UanUB2Gm4+SJ5omwOrTpSKMqm4DCxKGgZRivkR4eyHF/R5rCH49M
    NfP6gOgCEv8CgYB8arzJmjDA6mTGty9KRmXjk0Zo8QoB7c2tapDIftxNpSQTTZki
    kkRytd25dINFg5fi6xeYkhTtcYRqodwEwNT1F1uotNaTNWFVT3UXzTsnaRDjzxvB
    YkL3EtYG19qS1lNyeJWls+jY53fpRpYkMbrB6QE0H3s3BFIyb0xXhom7AQKBgBSR
    TXTbP36WGvtJkvpEivmRSmFJmzF5iovwKpqsy3W9xFEq8CAYRfVOIH+H+xrnYxax
    C9HVMhT1zgVC+r2vCZ/2BTcrcspWuZy6Z3vAnWMafpPQkDzv6xYO/C2dL1j4vJqY
    rWyU8iLdMDwuUtM6kDF4bqDtNKd4BY44NFG7Q7PbAoGADgBlxqWYJV89l3PBa47z
    LpbVzgazym6IUT3Ory0FM7jCEtwDG8asdPAFJKirwwYKjEs/WT2tGN57ie6DtOcR
    OH2TarSt66OyouewBF0dAnJGTg+G03X6p43cZsTe/UatpCPLiuTV0Cdtgu1OHgyn
    EJzqBy5BfY+Mf5EOcdy9gdo=
    -----END PRIVATE KEY-----
    `
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
  res.status(200).json(response.data);
  } catch (e) {
    res.status(500)
  }
}
