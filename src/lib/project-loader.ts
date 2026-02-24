import fs from 'fs';
import path from 'path';

export interface RawProject {
    id: string;
    title: string;
    domain: string;
    technologies: string[];
}

export async function getProjects(): Promise<RawProject[]> {
    try {
        const csvPath = path.join(process.cwd(), 'Projnyx_Projects.csv');
        const fileContent = fs.readFileSync(csvPath, 'utf-8');

        // Handle both \r\n and \n line endings
        const lines = fileContent.split(/\r?\n/).filter(line => line.trim() !== '');

        // Skip header
        const dataLines = lines.slice(1);

        return dataLines.map(line => {
            // Proper CSV split that handles commas inside quotes
            const values = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map(v => v.replace(/^"|"$/g, '').trim());

            if (values.length < 3) return null;

            const [id, title, domain, techStr] = values;

            return {
                id: id || '',
                title: title || '',
                domain: domain || '',
                technologies: techStr ? techStr.split(',').map(t => t.trim()) : []
            };
        }).filter((p): p is RawProject => p !== null);
    } catch (error) {
        console.error('Error loading projects from CSV:', error);
        return [];
    }
}
