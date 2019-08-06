const CLASSES = [
    {
        Time: 7,
        Day: 1,
        Class: "Yoga",
        End: 8,
        Instructor: "Maja"

    },
    {
        Time: 7,
        Day: 0,
        Class: "Yoga",
        End: 8,
        Instructor: "Maja"

    },
    {
        Time: 9,
        Day: 4,
        Class: "yoga",
        End: 11,
        Instructor: "Maja"
    },
    {
        Time: 7,
        Day: 3,
        Class: "Boxing",
        End: 8,
        Instructor: "Mace"
    },
    {
        Time: 12,
        Day: 7,
        Class: "yogalaties",
        End: 2,
        Instructor: "Pat"
    },

];

export const getClasses = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(CLASSES), 500)
  })
} 

export default getClasses;