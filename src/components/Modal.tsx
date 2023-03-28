import React, { Dispatch, SetStateAction } from 'react'
import { AiOutlineClose } from 'react-icons/ai';

type Props = { children: any, show: boolean; setShow: Dispatch<SetStateAction<boolean>>; }

const Modal = ({ children, show, setShow }: Props) => {
    return (
        <>
            {
                show &&
                <div className="fixed inset-0 flex items-center justify-center p-10 bg-black bg-opacity-25 z-40">
                    <div className="bg-secondary2-bg  p-10 rounded-lg max-w-2xl z50 relative overflow-y-scroll shadow">
                        <div onClick={() => setShow(false)}
                            className="absolute top-3 right-3 bg-gray-300 p-3 rounded-full hover:bg-gray-400 transition-all cursor-pointer"
                        >
                            <AiOutlineClose className="h-3 w-3" />
                        </div>
                        <div>
                            {children}
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

export default Modal