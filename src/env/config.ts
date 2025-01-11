export const getEnvSafely = (envKey: string) => {

    const isServer = typeof window === "undefined";
    const customEnvKey = isServer ? envKey : `NEXT_PUBLIC_${envKey}`;
    
    const envVal = process.env[customEnvKey];
  
    if (!envVal) {
      throw new Error(`Missing variable "${customEnvKey}"!`);
    }
  
    return envVal;
  };
  