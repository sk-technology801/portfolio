// src/app/api/contact/route.js
import { connectToDB } from '../../../lib/mongodb';
import Contact from '../../../models/Contact';

export async function POST(req) {
  const body = await req.json();
  await connectToDB();
  const contact = await Contact.create(body);
  return Response.json({ message: 'Message received', contact });
}
