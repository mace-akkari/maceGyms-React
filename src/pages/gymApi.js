export const getClasses = async () => {
    const response = await fetch('http://localhost:8080/classes');
    const classes = await response.json();
    return classes;
}

export default getClasses;