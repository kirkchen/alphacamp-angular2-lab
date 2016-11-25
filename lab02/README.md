# 練習撰寫 Typescript

1. 安裝 Typescript 與 ts-node

    ```
    npm install --save-dev ts-node typescript
    ```

1. 新增 `Calculator` Class，並且具有 `Add` 方法，可處理兩數相加，並具有型別

    ```
    export default class Calculator {
        Add(a: number, b: number): number {
            return a + b;
        }
    }
    ```

1. 在 `app.ts` 嘗試引用並使用 `Calculator` 進行兩數相加

    ```
    import Calculator from './calculator';

    let calculator = new Calculator();
    let result: number = calculator.Add(1, 2);

    console.log(result);
    ```

1. 執行程式

    ```
    npm start
    ```