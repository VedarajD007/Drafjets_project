import mongoose from 'mongoose';
import Project from './models/Project';
import { SAMPLE_PROJECTS } from './lib/seed-data';

async function seedDatabase() {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error('MONGODB_URI is not defined');
    }

    console.log('Connecting to MongoDB...');
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    // Clear existing projects
    console.log('Clearing existing projects...');
    await Project.deleteMany({});

    // Insert sample projects
    console.log('Inserting sample projects...');
    await Project.insertMany(SAMPLE_PROJECTS);

    console.log(`✅ Successfully seeded ${SAMPLE_PROJECTS.length} projects!`);
    console.log('\nProjects added:');
    SAMPLE_PROJECTS.forEach((project) => {
      console.log(`  - ${project.projectName} (${project.projectId})`);
    });

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
