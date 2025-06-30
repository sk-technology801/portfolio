import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    image: String,
    tech: [String],
    live: String,
    github: String,
  },
  { timestamps: true }
);

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);
