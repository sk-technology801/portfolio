// import { connectToDB } from '../../../../lib/mongodb';
// import Project from '../../../../models/Project';
// inside any /api/[name]/route.js file
import { connectToDB } from '../../../lib/mongodb';
import Contact from '../../../models/Contact'; // or Project, etc.
export async function GET() {
  try {
    await connectToDB();
    const projects = await Project.find();
    return Response.json(projects);
  } catch (err) {
    return new Response('Failed to load projects', { status: 500 });
  }
}
