import { createSlice } from '@reduxjs/toolkit';
import { uuid } from 'uuidv4';
export const initialState = {
  boards: {},
  boardsList: [],
  columns: {},
  cards: {},
};
const trelloSlice = createSlice({
  name: 'trello',
  initialState,
  reducers: {
    addBoard: (state, { payload }) => {
      const { name } = payload;
      const id = uuid();
      state.boardsList.push(id);
      state.boards[id] = {
        id,
        name,
        columnsList: [],
      };
    },
    addColumn: (state, { payload }) => {
      const { boardId, title } = payload;
      const id = uuid();
      state.columns[id] = {
        id,
        title,
        cardsList: [],
      };
      state.boards[boardId].columnsList.push(id);
    },
    addCard: (state, { payload }) => {
      const { description, title, columnId } = payload;
      const id = uuid();
      state.cards[id] = {
        id,
        title,
        description,
      };
      state.columns[columnId].cardsList.push(id);
    },
    deleteCard: (state, { payload }) => {
      const { columnId, cardId } = payload;
      state.columns[columnId].cardsList = state.columns[
        columnId
      ].cardsList.filter(card => card !== cardId);
      delete state.cards[cardId];
    },
    deleteColumn: (state, { payload }) => {
      const { boardId, columnId } = payload;
      //Removing cards of that column
      state.columns[columnId].cardsList.map(
        cardId => delete state.cards[cardId]
      );
      //Removing column
      delete state.columns[columnId]
      //Removing column from the board
      state.boards[boardId].columnsList = state.boards[boardId].columnsList.filter(column => column !== columnId)        
    },
    deleteBoard: (state, {payload}) => {
      const { boardId } = payload;
      //Removing the board from the board list
      state.boardsList = state.boardsList.filter(board => board !== boardId);
      //Removing the columns in the board
      state.boards[boardId].columnsList.map(column => {
        state.columns[column].cardsList.map(card => {
          delete state.cards[card]
        })
        delete state.columns[column]
      })
      delete state.boards[boardId];
    }
  },
});
export const { addBoard, addColumn, addCard, deleteCard, deleteColumn , deleteBoard} = trelloSlice.actions;
export default trelloSlice.reducer;
