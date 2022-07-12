
interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}

export const seedData: SeedData = {
    entries: [
        {
            description: 'Pendiente: Cualquier cosa aqui esta escrito',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            description: 'In-Progress: No se que mas escribit',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {
            description: 'Terminadas: Jugar Elden Ring',
            status: 'finished',
            createdAt: Date.now() - 100000,
        }
    ]
}