# EnvyDesign Coding Rule Verification

エンヴィデザイン様のコーディングルールを拝見し、
命名規則・設計思想を意識して既存課題を再実装した検証用プロジェクトです。

ルールへの準拠状況および差分については、下記ドキュメントにまとめております。

→ [CODING_RULE_DIFF.md](./CODING_RULE_DIFF.md)

---

## 🔧 技術スタック

- HTML5
- SCSS（FLOCSSベース）
- BEM命名規則
- Vanilla JavaScript
- picture要素によるレスポンシブ画像切り替え
- loading="lazy" 対応
- コピーライトの動的出力（Date API）

---

## 📁 ディレクトリ構成

<pre> ```text assets/ ├── css/ ├── img/ ├── js/ └── scss/ ├── foundation/ ├── global/ ├── component/ ├── page/ └── utility/ ``` </pre>

SCSSは FLOCSS をベースに、foundation / global / layout / component / page / utility に分割しています。
objectディレクトリは設けず、component / page / utility を直下に配置しています。

---

## 🌐 テスト環境

https://xs541225.xsrv.jp/preview/msm2602/
※Basic認証設定済み
