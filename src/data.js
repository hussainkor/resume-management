import { nanoid } from "nanoid"
// Add New Job
export const jobDetailsDB = [
    {
        id: nanoid(),
        jobTitle: "Full Stack Developer",
        totalPosaition: 3,
        jobDescription: "orem Ipsum Dolor",
        company: "Reliance",
        date: new Date(),
        status: true,
    }
]

// Applicants
export const applicantDB = [
    {
        id: nanoid(),
        fname: "Raghib",
        lname: "Hussain",
        email: "hussu@gmail.com",
        phone: "9709420678",
        applyfor: "Full Stack Developer",
        file: "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg",
        c_photo: "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg",
    }
]

// Company
export const companyDB = [
    {
        id: nanoid(),
        name: "Airtel",
        companyType: "large",
        status: false,
    },
    {
        id: nanoid(),
        name: "Reliance",
        companyType: "large",
        status: true,
    },
    {
        id: nanoid(),
        name: "Technix",
        companyType: "small",
        status: true,
    },
    {
        id: nanoid(),
        name: "TCS",
        companyType: "large",
        status: true,
    }
]


