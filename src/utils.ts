export const getRequiredEnvVar = (envVarName: string): string => {
  const envVar = process.env[envVarName];
  if (!envVar) {
    throw new Error(`Environment variable ${envVarName} is not set`);
  }
  return envVar;
};

export const getDeploymentUrl = (): string => {
  return new URL(`https://${process.env.NEXT_PUBLIC_VERCEL_URL}`).href;
};
