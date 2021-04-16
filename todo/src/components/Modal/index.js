import Modal from '@material-ui/core/Modal';
import {useDispatch} from 'react-redux'
import {showModal, closeModal} from '../../actions/modal'

const ModalWindow = () => {

    const dispatch = useDispatch();

    return (
        <Modal
        open={dispatch(showModal())}
        onClose={dispatch(closeModal())}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div>Test Modal</div>
      </Modal>
    )
}

export default ModalWindow