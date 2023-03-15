export const transientConfig = {
  shouldForwardProp: (prop:string) => !prop.startsWith("$"),
};