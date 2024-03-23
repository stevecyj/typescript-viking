# typescript

## 進度

2-14 声明文件 第二部分

## undefined

在TypeScript的tsconfig.json設定檔中，有一個名為strictNullChecks的選項，用於開啟或關閉嚴格的null檢查。

當strictNullChecks設定為true時，TypeScript會對null和undefined的使用進行嚴格檢查，以避免可能的空引用錯誤。 這意味著你需要明確地處理可能為null或undefined的情況，或使用可選類型來表示可能為null或undefined的值。

當strictNullChecks設定為false時，TypeScript會放寬對null和undefined的檢查，允許它們被賦值給任何類型的變數。 這樣可能會導致在運行時出現空引用錯誤。

所以，可以依照自己的需求設定你想要的配置。

```typescript
{
  "compilerOptions": {
    "strictNullChecks": true
  }
}
```

```typescript
{
  "compilerOptions": {
    "strictNullChecks": false
  }
}
```

## interface

- 對物件的形狀進行描述
- Duck Typing(鴨子類型)
- 用來做類型檢查

## type, interface 之間的差異

- type 可以聯合、交叉、映射、組合等的時候使用
- interface, extends, implements, 用來描述物件的形狀時使用
- 其他情況看經驗

## 第三方庫定義文件

```
declare const calculator: ICalculator

export default calculator
```

## utitlity types

<https://www.typescriptlang.org/docs/handbook/utility-types.html#handbook-content>

## project configuration

<https://www.typescriptlang.org/zh/docs/handbook/tsconfig-json.html>

- files
- include
  - 可以使用 glob 模式
  - **/* 表示所有子目錄
- exclude

### compilerOptions

- outDir: 輸出目錄
- module:
在 TypeScript 的 `tsconfig.json` 檔案中，`module` 是一個編譯選項，用於指定要生成的模組系統。這對於你的程式碼如何組織和引用模組非常重要。

以下是一些可用的 `module` 選項：

- `None`: 不產生模組，所有的 `import` 和 `export` 會被忽略。
- `CommonJS`: 這是 Node.js 和一些瀏覽器環境中使用的模組系統。
- `AMD`: 這是非同步模組定義，用於瀏覽器。
- `System`: 這是 SystemJS 加載器的模組格式。
- `UMD`: 這是通用模組定義，可以在 CommonJS 和 AMD 環境中使用。
- `ES6` 或 `ES2015`: 這是 ECMAScript 6 模組系統。
- `ESNext`: 這是最新的 ECMAScript 模組系統。

選擇哪種模組系統取決於你的目標環境和你的程式碼組織方式。例如，如果你正在為 Node.js 編寫程式，你可能會選擇 `CommonJS`。如果你正在為瀏覽器編寫程式，你可能會選擇 `AMD` 或 `System`。

- target: 指定 ECMAScript 目標版本
- declaration: 生成對應的 `.d.ts` 檔案
