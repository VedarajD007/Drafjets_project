import mongoose from 'mongoose';
import Project from '../models/Project.js';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env.local') });

const csvProjects = JSON.parse(fs.readFileSync(path.join(__dirname, '../projects.json'), 'utf8'));

function getBranch(domain: string) {
    const d = domain.toLowerCase();
    if (d.includes('iot') || d.includes('robotics') || d.includes('telecom') || d.includes('ece') || d.includes('embedded')) {
        return 'ECE';
    }
    return 'CSE';
}

function getDifficulty(domain: string) {
    const d = domain.toLowerCase();
    if (d.includes('gen-ai') || d.includes('blockchain') || d.includes('deeplearning') || d.includes('medical ai')) {
        return 'Advanced';
    }
    return 'Intermediate';
}

const formattedProjects = csvProjects
    .filter((p: any) => p['Project Title'] && p['Project Title'].trim() !== '')
    .map((p: any) => ({
        projectId: `DRAF${p.ID.padStart(3, '0')}`,
        projectName: p['Project Title'],
        category: 'Major', // Defaulting to Major for these academic projects
        domain: p.Domain || 'General IT',
        technologyStack: p.Technologies ? p.Technologies.split(',').map((t: string) => t.trim()) : [],
        branch: getBranch(p.Domain || ''),
        difficultyLevel: getDifficulty(p.Domain || ''),
        description: `A sophisticated ${p.Domain} project focusing on ${p['Project Title']}. Built using ${p.Technologies}.`,
        longDescription: `This project, "${p['Project Title']}", is an advanced implementation in the field of ${p.Domain}. It leverages technologies like ${p.Technologies} to provide a robust solution. Ideal for final year engineering students seeking high-quality academic prototypes.`
    }));

async function seedCsv() {
    try {
        const mongoUri = process.env.MONGODB_URI;
        if (!mongoUri) throw new Error('MONGODB_URI not found');

        console.log('Connecting...');
        await mongoose.connect(mongoUri);

        console.log('Importing ' + formattedProjects.length + ' projects...');

        // We append or overwrite? Usually "ADD" means append.
        // However, for clean state let's see current projects.

        for (const p of formattedProjects) {
            await Project.findOneAndUpdate(
                { projectId: p.projectId },
                p,
                { upsert: true, new: true }
            );
        }

        console.log('✅ Successfully imported projects from CSV!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
}

seedCsv();
