import companyData from "../companyData";

  const extractTeamMembers = (arrayStructure) => {
    console.log("arrayStructure", arrayStructure);
    const newTeamMembers = [];
  
    arrayStructure.forEach((innerArray) => {
      innerArray.forEach((teamObject) => {
        if (teamObject && teamObject?.teamLeader && teamObject?.teamLeader?.teamMembers) {
          newTeamMembers.push(...teamObject?.teamLeader?.teamMembers);
        }
      });
    });
  
    return newTeamMembers;
  }; 

  console.log("companyData", companyData[0]?.company_teamMembers?.map((item) => item?.teamMembers_dept));
const initialState = {
    company: companyData,
    teamMembers: extractTeamMembers(companyData[0]?.company_teamMembers?.map((item) => item?.teamMembers_dept)),
  };
  
  const rootReducer = (state = initialState, action) => {
    console.log("teamMembers", state.teamMembers);
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
  