export const addMember = (member) => ({
    type: 'ADD_MEMBER',
    payload: member,
});

export const removeMember = (member) => ({
    type: 'REMOVE_MEMBER',
    payload: member,
});

export const updateMemberAction = (member) => ({
    type: 'UPDATE_MEMBER',
    payload: member,
});
  
export const addTeamMemberToDept = (teamMember, deptId) => {
  return {
    type: 'ADD_TEAM_MEMBER_TO_DEPT',
    payload: { teamMember, deptId },
  };
};
  