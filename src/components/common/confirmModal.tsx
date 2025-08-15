import React from 'react';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title = 'Confirm Action',
  message = 'Are you sure?',
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 dark:bg-gray-900/80"
    >
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg w-full max-w-md mx-4">
        <div className="flex justify-between items-start p-4 border-b dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 
                1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 
                1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 
                4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-300">{message}</p>
        </div>

        <div className="flex justify-end gap-2 p-6 border-t dark:border-gray-600">
          <button
            onClick={onConfirm}
            className="bg-red-800 hover:bg-red-900 text-white font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Yes, Deactivate
          </button>
          <button
            onClick={onClose}
            className="bg-white hover:bg-gray-100 border border-gray-300 text-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-500 dark:hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;

