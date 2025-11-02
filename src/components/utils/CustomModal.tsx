'use client'
import { ReactNode } from 'react'
import Modal from 'react-modal'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function CustomModal({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  size = 'md' 
}: ModalProps) {
  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg', 
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={`bg-white rounded-2xl shadow-xl mx-auto mt-20 ${sizeClasses[size]} w-full`}
      overlayClassName="fixed inset-0 bg-black/50 z-50 flex items-start justify-center p-4"
      appElement={typeof window !== 'undefined' ? document.body : undefined}
    >
      {title && (
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
          >
            ×
          </button>
        </div>
      )}
      
      <div className={title ? 'p-6' : 'p-6 pt-10'}>
        {children}
      </div>
    </Modal>
  )
}