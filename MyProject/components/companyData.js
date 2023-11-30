const companyData = [
  {
    id: 1,
    name: 'Asutosh',
    position: 'CEO',
    phone: '123456789',
    email: 'ceo@example.com',
    company_teamMembers: [
      {
        id: 2,
        name: 'Gaurav',
        position: 'Head of Staff/HR',
        phone: '987654321',
        email: 'hr@example.com',
        teamMembers_dept: [
          {
            id: 31,
            name: 'Team 1',
            teamLeader: {
              id: 311,
              name: 'Team Leader 1',
              position: 'Team Leader',
              phone: '555666777',
              email: 'teamleader1@example.com',
              teamMembers: [
                {
                  id: 50,
                  name: 'ashish',
                  position: 'Hr',
                  phone: '123456789',
                  email: 'ashish@example.com',
                },
              ],
            },
          },
        ],
      },
      {
        id: 3,
        name: 'Asutosh',
        position: 'Head of Engineering',
        phone: '987654321',
        email: 'hr@example.com',
        teamMembers_dept: [
          {
            id: 32,
            name: 'Team hoe',
            teamLeader: {
              id: 321,
              name: 'Team Leader 1',
              position: 'Team Leader',
              phone: '555666777',
              email: 'teamleader1@example.com',
              teamMembers: [
                {
                  id: 51,
                  name: 'ashish',
                  position: 'Hr',
                  phone: '123456789',
                  email: 'ashish@example.com',
                },
              ],
            },
          },
        ],
      },
      {
        id: 4,
        name: 'Apurva',
        position: 'Head of Design',
        phone: '987654321',
        email: 'hr@example.com',
        teamMembers_dept: [
          {
            id: 33,
            name: 'Team hod',
            teamLeader: {
              id: 331,
              name: 'Team Leader 1',
              position: 'Team Leader',
              phone: '555666777',
              email: 'teamleader1@example.com',
              teamMembers: [
                {
                  id: 52,
                  name: 'ashish',
                  position: 'Hr',
                  phone: '123456789',
                  email: 'ashish@example.com',
                },
              ],
            },
          },
        ],
      },
    ],
  },
]

export default companyData

