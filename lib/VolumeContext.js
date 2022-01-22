import { createContext, useContext, useState } from 'react';

const VolumeContext = createContext();
const VolumeContextProvider = VolumeContext.Provider;

const VolumeProvider = ({ children }) => {
    const [volume, setVolume] = useState(0.5);

    return (
        <VolumeContextProvider value={{ volume, setVolume }}>
            {children}
        </VolumeContextProvider>
    );
};

const useVolume = () => useContext(VolumeContext);

export { VolumeProvider, useVolume };
