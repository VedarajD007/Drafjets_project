import mongoose, { Schema, Document } from 'mongoose';

export interface IProject extends Document {
  projectId: string;
  projectName: string;
  category: 'Mini' | 'Major';
  domain: string;
  technologyStack: string[];
  branch: string;
  difficultyLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  longDescription?: string;
  imageUrl?: string;
  pdfUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema: Schema = new Schema(
  {
    projectId: { type: String, required: true, unique: true },
    projectName: { type: String, required: true, index: true },
    category: { type: String, enum: ['Mini', 'Major'], required: true, index: true },
    domain: { type: String, required: true, index: true },
    technologyStack: [{ type: String }],
    branch: { type: String, required: true, index: true },
    difficultyLevel: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true },
    description: { type: String, required: true },
    longDescription: { type: String },
    imageUrl: { type: String },
    pdfUrl: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);
