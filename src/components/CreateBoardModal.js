import {
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addBoard } from '../slices';
function CreateBoardModal({ isOpen, onClose }) {
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{ name: '' }}
        onSubmit={(values, props) => {
          dispatch(addBoard({ name: values.name }));
          onClose();
          props.resetForm();

        }}
      >
        {({ handleChange, handleBlur, touched, values, handleSubmit }) => (
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Create a new board</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <Heading as="h6" size="sm" mb={5}>
                  Enter the board name:
                </Heading>
                <Input
                  placeholder="Project name"
                  size="sm"
                  value={values.name}
                  onChange={handleChange('name')}
                />
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </Formik>
    </>
  );
}
export default CreateBoardModal;
