const CLASSES = [
    {
        startTime: 7,
        day: 1,
        description: "Yoga",
        endTime: 8,
        instructor: "Maja"
    },
    {
        startTime: 7,
        day: 0,
        description: "Yoga",
        endTime: 8,
        instructor: "Maja"

    },
    {
        startTime: 9,
        day: 4,
        description: "yoga",
        endTime: 11,
        instructor: "Maja"
    },
    {
        startTime: 7,
        day: 3,
        description: "Boxing",
        endTime: 8,
        instructor: "Mace"
    },
    {
        startTime: 12,
        day: 7,
        description: "yogalaties",
        endTime: 2,
        instructor: "Pat"
    },

];

export const getClasses = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(CLASSES), 500)
  })
} 

export default getClasses;