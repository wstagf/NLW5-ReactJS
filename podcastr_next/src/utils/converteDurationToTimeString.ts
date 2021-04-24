export function converteDurationToTimeString(duration: number) {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const secounds = duration % 60;

    const finalResult = [hours, minutes, secounds]
        .map(unit => String(unit).padStart(2, '0'))
        .join(":")

    return finalResult;
}