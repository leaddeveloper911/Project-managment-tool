import socket from './socket';

/* Actions for members*/

const createBoardMembership = (boardId, data) =>
  socket.post(`/boards/${boardId}/memberships`, data);

const deleteBoardMembership = (id) => socket.delete(`/board-memberships/${id}`);

export default {
  createBoardMembership,
  deleteBoardMembership,
};
