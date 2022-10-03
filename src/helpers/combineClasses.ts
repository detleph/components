export function combineClasses(...classes: string[]): string {
  return classes.join(" ");
}

export function combineConditionalClasses(classes: { [k: string]: boolean }): string {
  return combineClasses(
    ...Object.entries(classes)
      .filter(([_, v]) => v)
      .map(([k]) => k)
  );
}
