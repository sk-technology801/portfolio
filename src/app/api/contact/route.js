// import { connectToDB } from '../../../lib/mongodb';
// import Contact from '../../../models/Contact';
// inside any /api/[name]/route.js file
import { connectToDB } from '../../../lib/mongodb';
import Contact from '../../../models/Contact'; // or Project, etc.
 
export async function POST(req) {
  const body = await req.json();
  await connectToDB();
  const contact = await Contact.create(body);
  return Response.json({ message: 'Message received', contact });
}
