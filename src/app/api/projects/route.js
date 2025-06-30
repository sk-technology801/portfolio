import { connectToDB } from '@/lib/mongodb';

import Project from '@/models/Project';

export async function GET() {
  await connectToDB();
  const projects = await Project.find().sort({ createdAt: -1 });
  return Response.json(projects);
}

export async function POST(req) {
  const body = await req.json();
  await connectToDB();
  const project = await Project.create(body);
  return Response.json({ message: 'Project added', project });
}
