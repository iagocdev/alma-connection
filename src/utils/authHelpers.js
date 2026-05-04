export const QUICK_INTERESTS = [
    "Cinema", "Música", "Literatura", "Filosofia", "Gastronomia",
    "Viagens", "Tecnologia", "Arte", "Esportes", "Meditação"
];

export function calculatePwStrength(pw) {
    if (!pw) return 0;
    let s = 0;
    if (pw.length >= 8) s++;
    if (/[A-Z]/.test(pw)) s++;
    if (/[0-9]/.test(pw)) s++;
    if (/[^A-Za-z0-9]/.test(pw)) s++;
    return s;
}