import { connectToDB } from '../../../../lib/mongodb';
import Project from '../../../../models/Project';

export async function GET() {
  try {
    await connectToDB();
    const projects = await Project.find();
    return Response.json(projects);
  } catch (err) {
    return new Response('Failed to load projects', { status: 500 });
  }
}
