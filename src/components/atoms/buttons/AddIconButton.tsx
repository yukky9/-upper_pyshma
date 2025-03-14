import React, {useState} from 'react';
import AddNewObjectModal from '../../modals/AddNewObjectModal';

const AddIconButton = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleConfirm = (name: string) => {
        console.log('Confirmed:', name);
        setIsModalOpen(false);
    };

    const handleClose = () => {
        console.log('Modal closed');
        setIsModalOpen(false);
    };

    return (
        <div>
            <button type='button' onClick={() => setIsModalOpen(true)}
                    className='w-full h-11 mt-10 bg-white shadow-xs border border-gray-300 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-500  hover:bg-gray-50'>
                <svg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M1.22229 5.0001H8.77785M5.00007 8.77788V1.22232' stroke='#101828' stroke-width='1.6'
                          stroke-linecap='round' stroke-linejoin='round'></path>
                </svg>
            </button>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                        <AddNewObjectModal
                            onConfirm={handleConfirm}
                            onClose={handleClose}
                            title="Добавить новый объект"
                        />
                </div>
            )}
        </div>
    );
};

export default AddIconButton;