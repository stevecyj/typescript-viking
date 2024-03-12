# typescript

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
