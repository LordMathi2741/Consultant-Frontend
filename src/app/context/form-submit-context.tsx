import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FormSubmitContextProps {
    onSubmit: () => void;
    addSubmitListener: (listener: () => void) => void;
}

interface FormSubmitProviderProps {
    children: ReactNode;
}

const FormSubmitContext = createContext<FormSubmitContextProps | undefined>(undefined);

export const FormSubmitProvider: React.FC<FormSubmitProviderProps> = ({ children }) => {
    const [listeners, setListeners] = useState<(() => void)[]>([]);

    const onSubmit = () => {
        listeners.forEach(listener => listener());
    };

    const addSubmitListener = (listener: () => void) => {
        setListeners(prevListeners => [...prevListeners, listener]);
    };

    return (
        <FormSubmitContext.Provider value={{ onSubmit, addSubmitListener }}>
            {children}
        </FormSubmitContext.Provider>
    );
};

export const useFormSubmit = () => {
    const context = useContext(FormSubmitContext);
    if (!context) {
        throw new Error('useFormSubmit must be used within a FormSubmitProvider');
    }
    return context;
};