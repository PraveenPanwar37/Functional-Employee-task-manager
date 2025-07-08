const employees = [
    {
        id: 1,
        username: "jatin@bhandari",
        name: "Jatin Bhandari",
        password: "123",
        taskCount: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 1
        },
        tasks: [
            {
                title: "Client Follow-up",
                description: "Call client regarding project update.",
                taskDate: "2025-07-03",
                category: "Communication",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Submit Weekly Report",
                description: "Submit your progress report to admin.",
                taskDate: "2025-07-01",
                category: "Reporting",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Data Cleanup",
                description: "Clean outdated entries from CRM.",
                taskDate: "2025-06-30",
                category: "Database",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            }
        ]
    },
    {
        id: 2,
        username: "ali@khan",
        name: "Ali Khan",
        password: "123",
        taskCount: {
            active: 2,
            newTask: 1,
            completed: 1,
            failed: 0
        },
        tasks: [
            {
                title: "Inventory Check",
                description: "Check inventory levels in warehouse.",
                taskDate: "2025-07-01",
                category: "Logistics",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                title: "Vendor Communication",
                description: "Contact new vendors for product samples.",
                taskDate: "2025-07-03",
                category: "Procurement",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Expense Sheet Submission",
                description: "Submit expense sheet for June.",
                taskDate: "2025-06-29",
                category: "Finance",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            }
        ]
    },
    {
        id: 3,
        username: "tony@singh",
        name: "Tony Singh",
        password: "123",
        taskCount: {
            active: 1,
            newTask: 2,
            completed: 1,
            failed: 1
        },
        tasks: [
            {
                title: "App Bug Fix",
                description: "Resolve login crash in mobile app.",
                taskDate: "2025-07-02",
                category: "Development",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Code Review",
                description: "Review code for new feature.",
                taskDate: "2025-07-01",
                category: "Development",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Sprint Planning",
                description: "Plan tasks for next sprint.",
                taskDate: "2025-07-04",
                category: "Management",
                active: false,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Documentation Update",
                description: "Update developer API docs.",
                taskDate: "2025-06-28",
                category: "Documentation",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            }
        ]
    },
    {
        id: 4,
        username: "vikram@saini",
        name: "Vikram Saini",
        password: "123",
        taskCount: {
            active: 2,
            newTask: 2,
            completed: 1,
            failed: 0
        },
        tasks: [
            {
                title: "Server Health Check",
                description: "Run diagnostics on production server.",
                taskDate: "2025-07-01",
                category: "IT",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "System Backup",
                description: "Backup system data to cloud.",
                taskDate: "2025-06-30",
                category: "IT",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Network Optimization",
                description: "Improve internal network speed.",
                taskDate: "2025-07-02",
                category: "IT",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            }
        ]
    },
    {
        id: 5,
        username: "minal@bendre",
        name: "Minal Bendre",
        password: "123",
        taskCount: {
            active: 2,
            newTask: 2,
            completed: 1,
            failed: 0
        },
        tasks: [
            {
                title: "Marketing Campaign",
                description: "Design graphics for social media campaign.",
                taskDate: "2025-07-01",
                category: "Marketing",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Presentation Preparation",
                description: "Prepare slides for Monday’s meeting.",
                taskDate: "2025-06-30",
                category: "Marketing",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Client Feedback Analysis",
                description: "Review and summarize client feedback forms.",
                taskDate: "2025-07-03",
                category: "Marketing",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            }
        ]
    }
];



const admin = [
    {
        id: 1,
        username: "praveen@admin",
        name: "Praveen Panwar",
        password: "123"
    }
]

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
}
export const getLocalStorage = () => {
   const employees = JSON.parse(localStorage.getItem("employees"));
   const admin = JSON.parse(localStorage.getItem("admin"));
   return {employees,admin}
}