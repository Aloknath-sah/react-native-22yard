const initialState = {
    teamMembers: [
      { id: 1, name: 'CEO', position: 'CEO', phone: '123456789', email: 'ceo@example.com' },
      // Add more initial teamMembers as needed
    ],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_MEMBER':
        return { ...state, teamMembers: [...state.teamMembers, action.payload] };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  