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
  
  