// Team Data - Super Simple Structure for Easy CRUD
// Contact info stored ONLY for mailto links, NOT displayed on page (Privacy Safe)

const teamData = {
    // TEAM LEGACY (2025-26)
    legacy: {
        // TEC Leadership (Contact Box)
        tecLeadership: [
            { name: "Vidhi Belani", role: "President", email: "vidhibelani01@gmail.com", phone: "9016531047" },
            { name: "Roshan Bhagat", role: "Vice President", email: "roshanbhagatbusiness2005@gmail.com", phone: "9657427682" },
            { name: "Rutuja Gavali", role: "General Secretary", email: "gavalirutuja2005@gmail.com", phone: "8767317245" }
        ],

        // Core Team (With Contacts)
        coreTeam: [
            { name: "Rutuja Gavali", role: "Graphic Designing", email: "gavalirutuja2005@gmail.com", phone: "8767317245" },
            { name: "Vaishnavi Kumavat", role: "Public Relation", email: "vnkumavat05@gmail.com", phone: "9689042042" },
            { name: "Kavita Borade", role: "Events Team", email: "kavitaboradee@gmail.com", phone: "8999513126" },
            { name: "Shubham Jadhav", role: "Technical", email: "shubhamja9863@gmail.com", phone: "9834717038" },
            { name: "–", role: "Documentation", email: "", phone: "" },
            { name: "Bhushan Bhusare", role: "Operations", email: "bbhusare73@gmail.com", phone: "9545418621" },
            { name: "Kapil Jadhav", role: "Media Team", email: "kapiljadhav1008@gmail.com", phone: "9767835067" },
            { name: "Abhishek Pawar", role: "Senior Member", email: "pawarabhishek9822@gmail.com", phone: "9822544582" },
            { name: "Tanmay Hirodkar", role: "Senior Member", email: "tnmy.web@gmail.com", phone: "8380066588" },
            { name: "Aditya Sonje", role: "Senior Member", email: "mihirsonje1209@gmail.com", phone: "8275973070" },
            { name: "Darshan Mali", role: "Senior Member", email: "darsham765@gmail.com", phone: "8668500533" },
            { name: "Siddharth Perkar", role: "Senior Member", email: "perkarsiddharth@gmail.com", phone: "7249461185" },
            { name: "Samarth Kuwar", role: "Senior Member", email: "kuwarsamarth13@gmail.com", phone: "8010554945" },
            { name: "Ashwin Shinde", role: "Senior Member", email: "shindeashwin0703@gmail.com", phone: "9309855546" }
        ],

        // Design Team (Separate Section)
        designTeam: {
            lead: { name: "Yash Patil", role: "Design Team lead", email: "yashpatil256731@gmail.com", phone: "8265076317" },
            members: [
                { name: "Mohit Borse", role: "Design Team", email: "mohitborse50@gmail.com", phone: "8446489251" },
                { name: "Sneha Dagwar", role: "Design Team", email: "snehadagwar06@gmail.com", phone: "9604249451" },
                { name: "Sakshi Wasaikar", role: "Design Team", email: "sakshivasaikar01@gmail.com", phone: "8788936906" },
                { name: "Rushikesh Saskar", role: "Design Team", email: "rushikeshsaskar2006@gmail.com", phone: "8275229386" },
                { name: "Bhagya Patil", role: "Design Team", email: "bhagyapatil2112@gmail.com", phone: "9960516269" },
                { name: "Harshal Wadge", role: "Design Team", email: "wadgeharshal@gmail.com", phone: "9975418594" },
                { name: "Purva Dhamne", role: "Design Team", email: "purvad02415@gmail.com", phone: "7798020105" },
                { name: "Komal Mogol", role: "Design Team", email: "mogalkomal978@gmail.com", phone: "9322362014" },
                { name: "Kaif Kazi", role: "Design Team", email: "kaifkazi139@gmail.com", phone: "8010257123" },
                { name: "Kanchan Kawale", role: "Design Team", email: "kanchankawale1256@gmail.com", phone: "7020532142" },
                { name: "Bhavika Raichura", role: "Design Team", email: "bhavikaraichura2007@gmail.com", phone: "9325404669" }
            ]
        },

        // Events Team (Separate Section)
        eventsTeam: {
            lead: { name: "Kavita Borade", role: "Events Team Lead", email: "kavitaboradee@gmail.com", phone: "8999513126" },
            members: [
                { name: "Eklavya Hire", role: "Events Team", email: "eklavyahire01@gmail.com", phone: "9112929633" },
                { name: "Sneha Dagwar", role: "Events Team", email: "snehadagwar06@gmail.com", phone: "9604249451" },
                { name: "Khushi Pal", role: "Events Team", email: "khushipal0908@gmail.com", phone: "9518946709" },
                { name: "Purva Dhamne", role: "Events Team", email: "purvad02415@gmail.com", phone: "7798020105" },
                { name: "Priyanka Ripote", role: "Events Team", email: "priyankaripote@gmail.com", phone: "9172140735" },
                { name: "Vaishnavi Nikam", role: "Events Team", email: "vaishnavin188@gmail.com", phone: "9699882026" }
            ]
        },

        // Technical Team (Separate Section)
        technicalTeam: {
            lead: { name: "Shubham Jadhav", role: "Technical Team Lead", email: "shubhamja9863@gmail.com", phone: "9834717038" },
            members: [
                { name: "Yash Patil", role: "Technical Team", email: "yashpatil256731@gmail.com", phone: "8265076317" },
                { name: "Rohan Patil", role: "Technical Team", email: "rohanspatil801@gmail.com", phone: "7020672694" },
                { name: "Rahul", role: "Technical Team", email: "relvixx89@gmail.com", phone: "8983707673" },
                { name: "Eklavya Hire", role: "Technical Team", email: "eklavyahire01@gmail.com", phone: "9112929633" },
                { name: "Sneha Dagwar", role: "Technical Team", email: "snehadagwar06@gmail.com", phone: "9604249451" },
                { name: "Khushi Pal", role: "Technical Team", email: "khushipal0908@gmail.com", phone: "9518946709" },
                { name: "Vaishnavi Nikam", role: "Technical Team", email: "vaishnavin188@gmail.com", phone: "9699882026" }
            ]
        },

        // Documentation Team (Separate Section)
        documentationTeam: {
            lead: { name: "Documentation Lead", role: "Documentation Team Lead", email: "", phone: "" },
            members: [
                { name: "Mohit Borse", role: "Documentation Team", email: "mohitborse50@gmail.com", phone: "8446489251" },
                { name: "Tanisha Bablani", role: "Documentation Team", email: "tanishabablani06@gmail.com", phone: "9405706690" },
                { name: "Khushi Pal", role: "Documentation Team", email: "khushipal0908@gmail.com", phone: "9518946709" },
                { name: "Rushikesh Saskar", role: "Documentation Team", email: "rushikeshsaskar2006@gmail.com", phone: "8275229386" },
                { name: "Priyanka Ripote", role: "Documentation Team", email: "priyankaripote@gmail.com", phone: "9172140735" }
            ]
        },

        // Media Team (Separate Section)
        mediaTeam: {
            lead: { name: "Kapil Jadhav", role: "Media Team Lead", email: "kapiljadhav1008@gmail.com", phone: "9767835067" },
            members: [
                { name: "Rohan Patil", role: "Media Team", email: "rohanspatil801@gmail.com", phone: "7020672694" },
                { name: "Purva Dhamne", role: "Media Team", email: "purvad02415@gmail.com", phone: "7798020105" },
                { name: "Tanvi Wagh", role: "Media Team", email: "tanviwagh200821@gmail.com", phone: "8530336502" },
                { name: "Harshal Wadge", role: "Media Team", email: "wadgeharshal@gmail.com", phone: "9975418594" },
                { name: "Ishwar Bansi Rathod", role: "Media Team", email: "vishurathod8624@gmail.com", phone: "8624819571" },
                { name: "Priyanka Ripote", role: "Media Team", email: "priyankaripote@gmail.com", phone: "9172140735" },
                { name: "Kaif Kazi", role: "Media Team", email: "kaifkazi139@gmail.com", phone: "8010257123" }
            ]
        },

        // Operations Team (Separate Section)
        operationsTeam: {
            lead: { name: "Bhushan Bhusare", role: "Operations Team Lead", email: "bbhusare73@gmail.com", phone: "9545418621" },
            members: [
                { name: "Kaif Kazi", role: "Operations Team", email: "kaifkazi139@gmail.com", phone: "8010257123" },
                { name: "Krushna", role: "Operations Team", email: "krishnakhode163@gmail.com", phone: "9307083459" },
                { name: "Eklavya Hire", role: "Operations Team", email: "eklavyahire01@gmail.com", phone: "9112929633" },
                { name: "Shrushti Sali", role: "Operations Team", email: "srushtisali0507@gmail.com", phone: "9372575359" },
                { name: "Rushikesh Saskar", role: "Operations Team", email: "rushikeshsaskar2006@gmail.com", phone: "8275229386" }
            ]
        },

        // Marketing and Sponsorship Team (Separate Section)
        marketingTeam: {
            lead: { name: "Rohan Patil", role: "Marketing & Sponsorship Co-lead", email: "rohanspatil801@gmail.com", phone: "7020672694" },
            members: [
                { name: "Purva Dhamne", role: "Marketing Team", email: "purvad02415@gmail.com", phone: "7798020105" },
                { name: "Eklavya Hire", role: "Marketing Team", email: "eklavyahire01@gmail.com", phone: "9112929633" },
                { name: "Amit Pandar", role: "Marketing Team", email: "amitpande3250@gmail.com", phone: "9270956352" },
                { name: "Khushi Pal", role: "Marketing Team", email: "khushipal0908@gmail.com", phone: "9518946709" },
                { name: "Kaif Kazi", role: "Marketing Team", email: "kaifkazi139@gmail.com", phone: "8010257123" }
            ]
        },

        // Volunteers (Separate Section)
        volunteers: [
            { name: "Rakhi Mahale", role: "Volunteer", email: "rakhi.mahale2007@gmail.com", phone: "7972275524" },
            { name: "Maithili Patil", role: "Volunteer", email: "pmaithili313@gmail.com", phone: "7841991808" },
            { name: "Gupta Shravani", role: "Volunteer", email: "guptashravani1308@gmail.com", phone: "9371748611" },
            { name: "Pal Bhamare", role: "Volunteer", email: "bhamarepal@gmail.com", phone: "7499225307" },
            { name: "Gauri Mishra", role: "Volunteer", email: "gaurim2910@gmail.com", phone: "8329348484" },
            { name: "Shubham Pal", role: "Volunteer", email: "shubhampalhyperlink@gmail.com", phone: "9175482526" }
        ]
    },

    // TEAM ELITE (2023-24)
    elite: {
        leadership: [
            { name: "Abhishek Pawar", role: "President", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" },
            { name: "Tanmay Hirodkar", role: "Vice President", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" },
            { name: "Aditya Sonje", role: "General Secretary", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" },
            { name: "Darshan Mali", role: "Treasurer", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" }
        ],

        teams: [
            {
                name: "Design Team",
                leader: { name: "Ashwin Shinde", role: "Design Lead", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" },
                members: [
                    { name: "Adney", role: "Design Member", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" },
                    { name: "Manas", role: "Design Member", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" },
                    { name: "Rutuja", role: "Design Member", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" },
                    { name: "Shubham", role: "Design Member", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" },
                    { name: "Yash", role: "Design Member", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" },
                    { name: "Mohit", role: "Design Member", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" },
                    { name: "Bhushan", role: "Design Member", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" }
                ]
            },
            {
                name: "Events Team",
                leader: { name: "Vidhi Belani", role: "Events Lead", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" },
                members: [
                    { name: "Kavita Borade", role: "Events Member", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" },
                    { name: "Pratik Bhand", role: "Events Member", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" },
                    { name: "Vaishnavi Kumawat", role: "Events Member", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" }
                ]
            },
            {
                name: "Marketing Team",
                leader: { name: "Siddharth Perkar", role: "Marketing Lead", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" },
                members: [
                    { name: "Rohan", role: "Marketing Member", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" },
                    { name: "Abhay", role: "Marketing Member", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" }
                ]
            },
            {
                name: "Operations Team",
                leader: { name: "Samarth Kuwar", role: "Operations Lead", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" },
                members: [
                    { name: "Pallavi Thoke", role: "Operations Member", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" },
                    { name: "Roshan Bhagath", role: "Operations Member", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" }
                ]
            }
        ],

        advisors: []
    },

    // TEAM SEED (2022-23)
    seed: {
        leadership: [
            { name: "Siddharth Perkar", role: "President", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" },
            { name: "Shyam Naie", role: "Vice President", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" },
            { name: "Samarth Kuwar", role: "Secretary", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" },
            { name: "Tanmay Hirodkar", role: "Treasurer", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" }
        ],

        teams: [
            {
                name: "Operations Team",
                leader: { name: "Hitesh Patil", role: "Operations Lead", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" },
                members: [
                    { name: "Mariya Ghasletwala", role: "Operations Member", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" },
                    { name: "Tanvi Shinde", role: "Operations Member", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" }
                ]
            },
            {
                name: "Marketing Team",
                leader: { name: "Abhishek Pawar", role: "Marketing Lead", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" },
                members: [
                    { name: "Darshan Mali", role: "Marketing Member", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" },
                    { name: "Harsh Shukla", role: "Marketing Member", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" }
                ]
            },
            {
                name: "Events Team",
                leader: { name: "Snehal Deshmukh", role: "Events Lead", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" },
                members: [
                    { name: "Gayatri Bhoi", role: "Events Member", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" },
                    { name: "Shruti Bagul", role: "Events Member", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" },
                    { name: "Vidhi Belani", role: "Events Member", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" }
                ]
            },
            {
                name: "Design Team",
                leader: { name: "Aditya Sonje", role: "Design Lead", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" },
                members: [
                    { name: "Neha Kulkarni", role: "Design Member", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" },
                    { name: "Ashwin Shinde", role: "Design Member", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" },
                    { name: "Janhvi Mhase", role: "Design Member", linkedin: "https://linkedin.com/in/shubham-jadhav-b209a6307", email: "shubhamja9863@gmail.com" }
                ]
            }
        ],

        advisors: []
    }
};

// Export for use in team page
if (typeof module !== 'undefined' && module.exports) {
    module.exports = teamData;
}
