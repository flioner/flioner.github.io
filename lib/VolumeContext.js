import { createContext, useContext, useState } from 'react';

const VolumeContext = createContext();

const VolumeProvider = ({ children }) => {
    const [volume, setVolume] = useState(50);

    return (
        <VolumeContext.Provider value={(volume, setVolume)}>
            {children}
        </VolumeContext.Provider>
    );
};

const useVolume = () => useContext(VolumeContext);

export { VolumeProvider, useVolume };
