import CryptoJS from 'crypto-js';

const base = 'https://qa.uptrillion.com'

async function getSalt(email) {
  const params = new URLSearchParams({ email }).toString()
  const saltResp = await fetch(`${base}/Service/API/MPOS/Login/GetForeEndSalt?${params}`)
  const json = await saltResp.json()
  return json.ForeEndSalt
}

async function getAuth(email, pwd, salt) {
  const password = CryptoJS.SHA512(pwd + salt).toString()

  const method = 'POST'
  const bodyObj = {email, password}
  const body = JSON.stringify(bodyObj)
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')

  const authResp = await fetch(`${base}/Service/API/MPOS/Login/GetAuth`, {
    method,
    body,
    headers
  })
  const json = await authResp.json()
  return json
}

async function login(email, pwd) {
  const salt = await getSalt(email)
  const auth = await getAuth(email, pwd, salt)
  console.log(auth);
}

login('aaa@gmail.com', 'abc123')