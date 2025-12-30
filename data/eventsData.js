const eventsData = [
    {
        id: "1",
        title: "NATIONAL ENTREPRENEURSHIP CHALLENGE: ACHIEVEMENT REPORT ",
        date: "February 09, 2024",
        headline: "AIR-05 Achievement at IIT Bombay E-Summit ‘24 ",
        tagline: "Innovate • Build • Lead",
        detailPageLink: "events/event-1.html",
        images: ["MajarIMG/NEC2024/1.jpeg", "MajarIMG/NEC2024/2.jpeg", "MajarIMG/NEC2024/3.jpeg"]
    },
    {
        id: "2",
        title: "EUREKA! 2024",
        date: "September 30, 2024",
        headline: "Zonal Business Model Competition",
        tagline: "Innovate • Build • Lead",
        detailPageLink: "events/event-2.html",
        images: ["MajarIMG/Eureka2024/1.jpeg", "MajarIMG/Eureka2024/2.jpeg", "MajarIMG/Eureka2024/3.jpeg", "MajarIMG/Eureka2024/4.jpeg", "MajarIMG/Eureka2024/5.jpeg", "MajarIMG/Eureka2024/6.jpeg", "MajarIMG/Eureka2024/7.jpeg", "MajarIMG/Eureka2024/8.jpeg"]
    },
    {
        id: "3",
        title: "IIC IPL MOCK AUCTION",
        date: "December 01, 2024",
        headline: "IPL Mock Auction: A Simulation in Strategic Resource Allocation",
        tagline: "Innovate • Build • Lead",
        detailPageLink: "events/event-3.html",
        images: ["MajarIMG/IICIPL/1.png", "MajarIMG/IICIPL/2.png", "MajarIMG/IICIPL/3.png"]
    },
    {
        id: "4",
        title: "MET ILLUMINATE WORKSHOP ",
        date: "February 27, 2023 ",
        headline: "MET Illuminate Entrepreneurship Workshop ",
        tagline: "Innovate • Build • Lead",
        detailPageLink: "events/event-4.html",
        images: ["MajarIMG/IILUMINATION2023/1.jpeg", "MajarIMG/IILUMINATION2023/2.jpeg", "MajarIMG/IILUMINATION2023/3.jpeg", "MajarIMG/IILUMINATION2023/4.jpeg", "MajarIMG/IILUMINATION2023/5.jpeg", "MajarIMG/IILUMINATION2023/6.jpeg", "MajarIMG/IILUMINATION2023/7.jpeg"]
    },
    {
        id: "5",
        title: "Western Entrepreneurship Challenge (WEC) 2025",
        date: "27–28, 2025",
        headline: "1st Runner-Up position at WEC 2025.",
        tagline: "Innovate • Build • Lead",
        detailPageLink: "events/event-5.html",
        images: ["MajarIMG/WEC2025/1.jpeg", "MajarIMG/WEC2025/2.jpeg", "MajarIMG/WEC2025/3.jpeg", "MajarIMG/WEC2025/4.jpeg", "MajarIMG/WEC2025/5.jpeg", "MajarIMG/WEC2025/6.jpeg", "MajarIMG/WEC2025/7.jpeg", "MajarIMG/WEC2025/8.jpeg", "MajarIMG/WEC2025/9.jpeg", "MajarIMG/WEC2025/10.jpeg", "MajarIMG/WEC2025/11.jpeg"]
    },
    {
        id: "6",
        title: "IPL Mock Auction 2.0",
        date: "November 22, 2025",
        headline: "E-Cell executed the IPL Mock Auction 2.0",
        tagline: "Innovate • Build • Lead",
        detailPageLink: "events/event-6.html",
        images: ["MajarIMG/IPL2025/2.png", "MajarIMG/IPL2025/2.png", "MajarIMG/IPL2025/3.png", "MajarIMG/IPL2025/4.png", "MajarIMG/IPL2025/5.png", "MajarIMG/IPL2025/6.png", "MajarIMG/IPL2025/7.png"]
    },
    {
        id: "7",
        title: "Yamaha’s Gear On & Throttle",
        date: "November 29, 2024",
        headline: "MET E-Cell, in collaboration with Connecting Beings Events, hosted ,Yamaha’s Gear On & Throttle.",
        tagline: "Innovate • Build • Lead",
        detailPageLink: "events/event-7.html",
        images: ["MajarIMG/YAMAHA/1.jpeg", "MajarIMG/YAMAHA/2.jpeg", "MajarIMG/YAMAHA/3.jpeg", "MajarIMG/YAMAHA/4.jpeg", "MajarIMG/YAMAHA/5.jpeg", "MajarIMG/YAMAHA/6.jpeg", "MajarIMG/YAMAHA/7.jpeg", "MajarIMG/YAMAHA/8.jpeg"]
    },
    {
        id: "8",
        title: "State Young Entrepreneurs Summit (YESummit)",
        date: "December 11, 2025",
        headline: "YESummit Nashik 2025 in collaboration with YouthAid Foundation (YAIF).",
        tagline: "Innovate • Build • Lead",
        detailPageLink: "events/event-8.html",
        images: ["MajarIMG/YESUMMIT2025/1.jpeg", "MajarIMG/YESUMMIT2025/2.jpeg", "MajarIMG/YESUMMIT2025/3.jpeg", "MajarIMG/YESUMMIT2025/4.jpeg", "MajarIMG/YESUMMIT2025/5.jpeg", "MajarIMG/YESUMMIT2025/6.jpeg", "MajarIMG/YESUMMIT2025/7.jpeg", "MajarIMG/YESUMMIT2025/8.jpeg", "MajarIMG/YESUMMIT2025/9.jpeg", "MajarIMG/YESUMMIT2025/10.jpeg", "MajarIMG/YESUMMIT2025/11.jpeg", "MajarIMG/YESUMMIT2025/12.jpeg", "MajarIMG/YESUMMIT2025/13.jpeg", "MajarIMG/YESUMMIT2025/14.jpeg", "MajarIMG/YESUMMIT2025/15.jpeg"]
    },
    {
        id: "9",
        title: "Igniting Innovation Summit 2025",
        date: "February 28, 2025",
        headline: "E-Cell MET recognized by the Government of Maharashtra during the Igniting Innovation summit",
        tagline: "Innovate • Build • Lead",
        detailPageLink: "events/event-9.html",
        images: ["assets/pitch-perfect.jpg", "assets/pitch-perfect.jpg", "assets/pitch-perfect.jpg"]
    },
    {
        id: "10",
        title: "Event 10IIBHM TECHXPO 2025",
        date: "November 27, 2025",
        headline: "MET AMDC and IIBHM hosted TECHXPO 2025, a flagship Innovation-to-Market platform. ",
        tagline: "Innovate • Build • Lead",
        detailPageLink: "events/event-10.html",
        images: ["assets/pitch-perfect.jpg", "assets/pitch-perfect.jpg", "assets/pitch-perfect.jpg"]
    }
];
//     },
//     {
//         id: "11",
//         title: "Event 11",
//         date: "Coming Soon",
//         headline: "Demo Event Description 11",
//         tagline: "Innovate • Build • Lead",
//         detailPageLink: "events/event-11.html",
//         images: ["assets/pitch-perfect.jpg", "assets/pitch-perfect.jpg", "assets/pitch-perfect.jpg"]
//     },
//     {
//         id: "12",
//         title: "Event 12",
//         date: "Coming Soon",
//         headline: "Demo Event Description 12",
//         tagline: "Innovate • Build • Lead",
//         detailPageLink: "events/event-12.html",
//         images: ["assets/pitch-perfect.jpg", "assets/pitch-perfect.jpg", "assets/pitch-perfect.jpg"]
//     },
//     {
//         id: "13",
//         title: "Event 13",
//         date: "Coming Soon",
//         headline: "Demo Event Description 13",
//         tagline: "Innovate • Build • Lead",
//         detailPageLink: "events/event-13.html",
//         images: ["assets/pitch-perfect.jpg", "assets/pitch-perfect.jpg", "assets/pitch-perfect.jpg"]
//     },
//     {
//         id: "14",
//         title: "Event 14",
//         date: "Coming Soon",
//         headline: "Demo Event Description 14",
//         tagline: "Innovate • Build • Lead",
//         detailPageLink: "events/event-14.html",
//         images: ["assets/pitch-perfect.jpg", "assets/pitch-perfect.jpg", "assets/pitch-perfect.jpg"]
//     },
//     {
//         id: "15",
//         title: "Event 15",
//         date: "Coming Soon",
//         headline: "Demo Event Description 15",
//         tagline: "Innovate • Build • Lead",
//         detailPageLink: "events/event-15.html",
//         images: ["assets/pitch-perfect.jpg", "assets/pitch-perfect.jpg", "assets/pitch-perfect.jpg"]
//     },
//     {
//         id: "16",
//         title: "Event 16",
//         date: "Coming Soon",
//         headline: "Demo Event Description 16",
//         tagline: "Innovate • Build • Lead",
//         detailPageLink: "events/event-16.html",
//         images: ["assets/pitch-perfect.jpg", "assets/pitch-perfect.jpg", "assets/pitch-perfect.jpg"]
//     }
// ]
