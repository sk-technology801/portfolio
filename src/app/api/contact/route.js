// import { connectToDB } from '../../../lib/mongodb'; // ✅ Relative import
import { connectToDB } from '@/app/lib/mongodb';
 import Contact from '../../../models/Contact';
// import Contact from '../../../models/Contact'; // ✅ Also use relative path

export async function POST(req) {
  try {
    const body = await req.json();

    await connectToDB(); // Connect to MongoDB

    const contact = await Contact.create(body); // Save to DB

    return Response.json({ message: 'Message received', contact });
  } catch (error) {
    console.error('❌ Contact form error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
