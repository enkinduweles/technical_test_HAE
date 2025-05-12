import { useModalContext } from '../../../context/ModalContext';
import { NewMovie } from '../NewMovie';

export function Modal() {
  const { onCloseModal } = useModalContext();

  return (
    <div
      id="modal"
      className="absolute inset-y-0 left-0 h-screen w-screen bg-black/70 flex items-center justify-center px-4"
      onClick={(e) => onCloseModal('event', e)}
    >
      <NewMovie />
    </div>
  );
}
