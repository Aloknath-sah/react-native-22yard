import companyData from "../companyData";

const initialState = {
  company: companyData,
    teamMembers: [
      { id: 1, name: 'Anurag', position: 'CEO', phone: '123456789', email: 'ceo@example.com' },
      // Add more initial teamMembers as needed
    ],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_MEMBER':
        return { ...state, teamMembers: [...state.teamMembers, action.payload] };
      case 'REMOVE_MEMBER':
        return {
          ...state,
          teamMembers: state.teamMembers.filter((employee) => employee.id !== action.payload)
        }
        case 'UPDATE_MEMBER':
          console.warn("team",state.teamMembers);
          console.warn("pay",action.payload);
          return {
            ...state,
            teamMembers: state.teamMembers.map((employee) =>
            employee.id === action.payload.id ? { ...employee, ...action.payload.updateMember } : employee
            )
        }
      default:
        return state;
    }
  };
  
  export default rootReducer;
  