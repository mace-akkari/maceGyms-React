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
        description: "Yoga",
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
        day: 6,
        description: "Yogalaties",
        endTime: 14,
        instructor: "Pat"
    },
    {
        startTime: 8,
        day: 2,
        description: "Spin",
        endTime: 8,
        instructor: "Bob"

    },
    {
        startTime: 10,
        day: 5,
        description: "Zumba",
        endTime: 11.5,
        instructor: "Afreido"

    },
    {
        startTime: 13,
        day: 6,
        description: "Yoga",
        endTime: 14,
        instructor: "Maja"

    },

];

export const getClasses = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(CLASSES), 500)
    })
}

export default getClasses;