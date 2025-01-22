/// <reference types="detox" />

declare namespace jest {
    interface Matchers<R> {
      toBeVisible(): Promise<R>;
      toExist(): Promise<R>;
      toHaveText(text: string): Promise<R>;
      toHaveId(id: string): Promise<R>;
      toHaveLabel(label: string): Promise<R>;
      toHaveValue(value: string): Promise<R>;
    }
  }
  