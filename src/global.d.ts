type RecursiveNonNullable<T> = {
  [K in keyof T]: RecursiveNonNullable<NonNullable<T[K]>>;
};

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}
