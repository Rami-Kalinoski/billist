const users = [
    {
        username:'pedro',
        email:'pedro@gmail.com',
        password:'pedro123',
        friends: ['juani@gmail.com', 'carla@gmail.com', 'susan@gmail.com'],
        projects: [{
            title:'Cancún 2024',
            description: 'Viaje a cancún con los pibes',
            owner: 'pedro@gmail.com',
            members: ['juani@gmail.com', 'carla@gmail.com', 'susan@gmail.com', 'timmy@gmail.com', 'nacho@gmail.com']
        },
        {
            title:'Navidad 2024',
            description: 'Navidad en casa de Susan',
            owner: 'susan@gmail.com',
            members: ['carla@gmail.com', 'susan@gmail.com', 'nacho@gmail.com']
        }]
    },
    {
        username:'juani',
        email:'juani@gmail.com',
        password:'juani123',
        friends: ['pedro@gmail.com', 'susan@gmail.com', 'nacho@gmail.com'],
        projects: [{
            title:'Cancún 2024',
            description: 'Viaje a cancún con los pibes',
            owner: 'pedro@gmail.com',
            members: ['juani@gmail.com', 'carla@gmail.com', 'susan@gmail.com', 'timmy@gmail.com', 'nacho@gmail.com']
        },
        {
            title:'Navidad 2024',
            description: 'Navidad en casa de Susan',
            owner: 'susan@gmail.com',
            members: ['carla@gmail.com', 'susan@gmail.com', 'nacho@gmail.com']
        }]
    },
    {
        username:'susan',
        email:'susan@gmail.com',
        password:'susan123',
        friends: ['pedro@gmail.com', 'timmy@gmail.com', 'nacho@gmail.com'],
        projects: [{
            title:'Cancún 2024',
            description: 'Viaje a cancún con los pibes',
            owner: 'pedro@gmail.com',
            members: ['juani@gmail.com', 'carla@gmail.com', 'susan@gmail.com', 'timmy@gmail.com', 'nacho@gmail.com']
        },
        {
            title:'Navidad 2024',
            description: 'Navidad en casa de Susan',
            owner: 'susan@gmail.com',
            members: ['carla@gmail.com', 'susan@gmail.com', 'nacho@gmail.com']
        }]
    },
    {
        username:'timmy',
        email:'timmy@gmail.com',
        password:'timmy123',
        friends: ['juani@gmail.com', 'susan@gmail.com', 'nacho@gmail.com'],
        projects: [{
            title:'Cancún 2024',
            description: 'Viaje a cancún con los pibes',
            owner: 'pedro@gmail.com',
            members: ['juani@gmail.com', 'carla@gmail.com', 'susan@gmail.com', 'timmy@gmail.com', 'nacho@gmail.com']
        },
        {
            title:'Navidad 2024',
            description: 'Navidad en casa de Susan',
            owner: 'susan@gmail.com',
            members: ['carla@gmail.com', 'susan@gmail.com', 'nacho@gmail.com']
        }]
    },
    {
        username:'nacho',
        email:'nacho@gmail.com',
        password:'nacho123',
        friends: ['pedro@gmail.com', 'susan@gmail.com', 'timmy@gmail.com'],
        projects: [{
            title:'Cancún 2024',
            description: 'Viaje a cancún con los pibes',
            owner: 'pedro@gmail.com',
            members: ['juani@gmail.com', 'carla@gmail.com', 'susan@gmail.com', 'timmy@gmail.com', 'nacho@gmail.com']
        },
        {
            title:'Navidad 2024',
            description: 'Navidad en casa de Susan',
            owner: 'susan@gmail.com',
            members: ['carla@gmail.com', 'susan@gmail.com', 'nacho@gmail.com']
        }]
    }
];

export default users;