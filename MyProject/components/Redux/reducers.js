import companyData from '../companyData';

const extractTeamMembers = arrayStructure => {
  const newTeamMembers = []

  arrayStructure.forEach(innerArray => {
    innerArray.forEach(teamObject => {
      if (
        teamObject &&
        teamObject?.teamLeader &&
        teamObject?.teamLeader?.teamMembers
      ) {
        newTeamMembers.push(...teamObject?.teamLeader?.teamMembers)
      }
    })
  })

  return newTeamMembers
}

const initialState = {
  company: companyData,
  teamMembers: extractTeamMembers(
    companyData[0]?.company_teamMembers?.map(item => item?.teamMembers_dept),
  ),
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MEMBER':
      return {...state, teamMembers: [...state.teamMembers, action.payload]}
    case 'REMOVE_MEMBER':
      return {
        ...state,
        teamMembers: state.teamMembers.filter(
          employee => employee.id !== action.payload,
        ),
      }
    case 'UPDATE_MEMBER':
      return {
        ...state,
        teamMembers: state.teamMembers.map(employee =>
          employee.id === action.payload.id
            ? {...employee, ...action.payload.updateMember}
            : employee,
        ),
      }
    default:
      return state
  }
};

export default rootReducer
