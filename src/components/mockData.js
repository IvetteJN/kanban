import { v4 as uuidv4 } from 'uuid';

const mockData = [
    {
        id: uuidv4(),
        title: "Por hacer",
        tasks: [
            {
                id: uuidv4(),
                title: "caminar",
            },
            {
                id: uuidv4(),
                title: "correr",
            },
            {
                id: uuidv4(),
                title: "saltar",
            }
        ]
    },
    {
        id: uuidv4(),
        title: "Haciendo",
        tasks: [
            {
                id: uuidv4(),
                title: "dibujar",
            },
            {
                id: uuidv4(),
                title: "pintar",
            },
            {
                id: uuidv4(),
                title: "decorar",
            }
        ]
    },
    {
        id: uuidv4(),
        title: "Hechas",
        tasks: [
            {
                id: uuidv4(),
                title: "cocinar",
            },
            {
                id: uuidv4(),
                title: "limpiar",
            },
            {
                id: uuidv4(),
                title: "desinfectar",
            }
        ]
    }
];

export default mockData;