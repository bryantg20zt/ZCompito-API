import usersDB from '../../resources/users.json' with {type: 'json'}


export function LoginUser (req, res) {
  const authHeader = req.headers.authorization
  const authEncoded = authHeader.split(' ')[1];
  const credentials = Buffer.from(authEncoded, 'base64').toString('utf-8');
  const [username, password] = credentials.split(':');
  const authenticated = usersDB.find((user) => user.userName === username && user.password === password)
  authenticated ? res.json(authenticated).status(200) : res.json({ error: 403}).status(403)
}