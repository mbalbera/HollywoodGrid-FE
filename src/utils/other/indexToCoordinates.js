export default function indexToCoordinates(index){
    const x = index % 3;
    const y = Math.floor(index / 3);
    return [x, y];
}