interface Numeral {
  (value?: unknown): Numeral;
  format: (pattern: string) => string;
  unformat: (pattern: string) => number;
  language: (key?: any, values?: any) => Numeral;
  set: (value?: any) => Numeral;
}

// eslint-disable-next-line no-var
declare var numeral: Numeral;

declare module '@elastic/numeral' {
  export = numeral;
}
