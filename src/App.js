import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Button
} from '@chakra-ui/react';
import { Logo } from './Logo';
import { useDispatch, useSelector } from 'react-redux';
import { addBoard, addCard, addColumn, deleteBoard, deleteCard, deleteColumn } from './slices';
import NavBar from './components/Nav';
import CreateBoardModal from './components/CreateBoardModal';

function App() {
  const state = useSelector((state) => state.trello)
  const dispatch = useDispatch()

  return (
    <ChakraProvider theme={theme}>
      <NavBar/>
      <Box textAlign="center" fontSize="xl">
      </Box>
    </ChakraProvider>
  );
}

export default App;
