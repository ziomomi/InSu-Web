export type EnergyType = "Solare" | "Eolico" | "Idroelettrico";

export type EnergySite = {
    name: string;
    province: string;
    lat: number;
    lng: number;
    type: EnergyType;
    energy: number;
};

export const energySites: EnergySite[] = [
    // COMO - Solare
    { name: "Cantù", province: "Como", lat: 45.73806, lng: 9.13242, type: "Solare", energy: 2.40 },
    { name: "Cernobbio", province: "Como", lat: 45.84303, lng: 9.07194, type: "Solare", energy: 4.20 },
    { name: "Como", province: "Como", lat: 45.80472, lng: 9.07411, type: "Solare", energy: 6.00 },
    
    // COMO - Eolico
    { name: "Monte Palanzone", province: "Como", lat: 45.86203, lng: 9.20372, type: "Eolico", energy: 15.40 },
    { name: "Monte Croce di Campo", province: "Como", lat: 46.10678, lng: 9.14933, type: "Eolico", energy: 17.20 },
    { name: "Monte Bisbino", province: "Como", lat: 45.87214, lng: 9.05928, type: "Eolico", energy: 5.00 },
    { name: "Monte San Primo", province: "Como", lat: 45.91667, lng: 9.20889, type: "Eolico", energy: 6.40 },
    { name: "Monte Lema", province: "Como", lat: 46.04072, lng: 8.83283, type: "Eolico", energy: 10.00 },
    { name: "Monte Generoso", province: "Como", lat: 45.93156, lng: 9.01958, type: "Eolico", energy: 15.00 },
    
    // COMO - Idroelettrico
    { name: "Torrente Cuccio", province: "Como", lat: 46.03033, lng: 9.12275, type: "Idroelettrico", energy: 60.00 },
    { name: "Menaggio", province: "Como", lat: 46.02394, lng: 9.24203, type: "Idroelettrico", energy: 55.00 },
    { name: "Argegno", province: "Como", lat: 45.94473, lng: 9.12916, type: "Idroelettrico", energy: 28.00 },
    { name: "Colico", province: "Como", lat: 46.15129, lng: 9.37868, type: "Idroelettrico", energy: 65.00 },
    { name: "Consiglio di Rumo", province: "Como", lat: 46.13730, lng: 9.30382, type: "Idroelettrico", energy: 58.00 },
    { name: "Domaso", province: "Como", lat: 46.14869, lng: 9.32994, type: "Idroelettrico", energy: 60.00 },
    { name: "Acquaseria", province: "Como", lat: 46.05205, lng: 9.26039, type: "Idroelettrico", energy: 45.00 },
    { name: "Dongo", province: "Como", lat: 46.12435, lng: 9.28596, type: "Idroelettrico", energy: 52.00 },
    { name: "Ossuccio", province: "Como", lat: 45.96687, lng: 9.18714, type: "Idroelettrico", energy: 35.00 },
    { name: "Dervio", province: "Como", lat: 46.07247, lng: 9.29783, type: "Idroelettrico", energy: 50.00 },
    { name: "Sorico", province: "Como", lat: 46.16926, lng: 9.38112, type: "Idroelettrico", energy: 62.00 },
    { name: "Tremezzo", province: "Como", lat: 45.98155, lng: 9.22239, type: "Idroelettrico", energy: 40.00 },
    { name: "Gera Lario", province: "Como", lat: 46.16798, lng: 9.36566, type: "Idroelettrico", energy: 63.00 },
    
    // LECCO - Solare
    { name: "Malgrate", province: "Lecco", lat: 45.84919, lng: 9.37728, type: "Solare", energy: 3.30 },
    { name: "Valmadrera", province: "Lecco", lat: 45.84883, lng: 9.36219, type: "Solare", energy: 4.00 },
    { name: "Lecco", province: "Lecco", lat: 45.85728, lng: 9.40517, type: "Solare", energy: 5.10 },
    
    // LECCO - Eolico
    { name: "Monte San Martino", province: "Lecco", lat: 45.94447, lng: 9.38753, type: "Eolico", energy: 4.00 },
    { name: "Monte Cornizzolo", province: "Lecco", lat: 45.83708, lng: 9.30244, type: "Eolico", energy: 9.00 },
    { name: "Monte Due Mani", province: "Lecco", lat: 45.89983, lng: 9.44839, type: "Eolico", energy: 14.00 },
    { name: "Monte Resegone", province: "Lecco", lat: 45.85875, lng: 9.46836, type: "Eolico", energy: 19.00 },
    { name: "Monte Grigna", province: "Lecco", lat: 45.93339, lng: 9.38319, type: "Eolico", energy: 8.20 },
    { name: "Monte Pizzo dei Tre Signori", province: "Lecco", lat: 46.01219, lng: 9.52736, type: "Eolico", energy: 13.20 },
    { name: "Monte Legnone", province: "Lecco", lat: 46.08344, lng: 9.39944, type: "Eolico", energy: 18.20 },
    
    // LECCO - Idroelettrico
    { name: "Pescate", province: "Lecco", lat: 45.83172, lng: 9.39631, type: "Idroelettrico", energy: 7.20 },
    
    // TICINO - Solare
    { name: "Biasca", province: "Ticino", lat: 46.35000, lng: 8.96667, type: "Solare", energy: 6.50 },
    { name: "Bellinzona", province: "Ticino", lat: 46.18981, lng: 9.03519, type: "Solare", energy: 7.40 },
    { name: "Locarno", province: "Ticino", lat: 46.18350, lng: 8.79753, type: "Solare", energy: 8.30 },
    { name: "Mendrisio", province: "Ticino", lat: 45.88853, lng: 8.95306, type: "Solare", energy: 9.20 },
    
    // TICINO - Eolico
    { name: "Val Bedretto", province: "Ticino", lat: 46.46938, lng: 8.48408, type: "Eolico", energy: 17.20 },
    { name: "Monte Tamaro", province: "Ticino", lat: 46.10000, lng: 8.88333, type: "Eolico", energy: 8.20 },
    { name: "Monte Brè", province: "Ticino", lat: 46.01306, lng: 8.98167, type: "Eolico", energy: 11.40 },
    { name: "Monte Generoso", province: "Ticino", lat: 45.93156, lng: 9.01958, type: "Eolico", energy: 16.40 },
    
    // TICINO - Idroelettrico
    { name: "Lugano", province: "Ticino", lat: 46.00222, lng: 8.95806, type: "Idroelettrico", energy: 13.00 },
    
    // VARESE - Solare
    { name: "Tradate", province: "Varese", lat: 45.70981, lng: 8.90958, type: "Solare", energy: 2.40 },
    { name: "Busto Arsizio", province: "Varese", lat: 45.61197, lng: 8.85148, type: "Solare", energy: 4.00 },
    { name: "Gallarate", province: "Varese", lat: 45.66281, lng: 8.79283, type: "Solare", energy: 4.10 },
    { name: "Gallarate 2", province: "Varese", lat: 45.66203, lng: 8.79039, type: "Solare", energy: 4.20 },
    { name: "Varese", province: "Varese", lat: 45.81819, lng: 8.82728, type: "Solare", energy: 4.40 },
    { name: "Saronno", province: "Varese", lat: 45.62583, lng: 9.03728, type: "Solare", energy: 5.10 },
    
    // VARESE - Eolico
    { name: "Monte Chiusarella", province: "Varese", lat: 45.87361, lng: 8.81408, type: "Eolico", energy: 12.20 },
    { name: "Monte Monarco", province: "Varese", lat: 45.86281, lng: 8.84161, type: "Eolico", energy: 14.00 },
    { name: "Monte Tre Croci", province: "Varese", lat: 45.86475, lng: 8.78064, type: "Eolico", energy: 15.40 },
    { name: "Monte Sasso del Ferro", province: "Varese", lat: 45.91100, lng: 8.64267, type: "Eolico", energy: 8.20 },
    { name: "Monte Nudo", province: "Varese", lat: 45.92356, lng: 8.68867, type: "Eolico", energy: 10.00 },
    { name: "Monte Campo dei Fiori", province: "Varese", lat: 45.89572, lng: 8.80533, type: "Eolico", energy: 11.40 },
    
    // VARESE - Idroelettrico
    { name: "Monte Fenera", province: "Varese", lat: 45.70219, lng: 8.29797, type: "Idroelettrico", energy: 16.20 },
    { name: "Luino", province: "Varese", lat: 46.00444, lng: 8.74303, type: "Idroelettrico", energy: 12.20 }
];

export const energyTypeColors: Record<EnergyType, string> = {
    Solare: "#ffd700",
    Eolico: "#4aa3ff",
    Idroelettrico: "#00c851",
};

export function formatEnergy(value: number): string {
    if (value >= 1000) {
        return `${(value / 1000).toFixed(1)} GWh/anno`;
    }

    return `${value} MWh/anno`;
}
