import { prismaDB } from '../../db/connection.js';

export async function LoginUser(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const user = await prismaDB.user.findUnique({
      where: { email },
    });

    if (user && user.password === password) {
      return res.status(200).json(user);
    } else {
      return res.status(403).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
