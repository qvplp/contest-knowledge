# Cloudflare Workers デプロイ設定ガイド

## 現在のエラー

デプロイコマンドが `/` になっているため、`Permission denied` エラーが発生しています。

## 解決方法

### Cloudflare Dashboardでの設定変更

1. **Cloudflare Dashboardにログイン**
   - https://dash.cloudflare.com/ にアクセス

2. **Workers & Pagesに移動**
   - 左サイドバーから「Workers & Pages」を選択
   - 「Workers」タブを選択

3. **プロジェクトを選択**
   - `animehub-contest` プロジェクトを選択

4. **Settingsに移動**
   - プロジェクトの「Settings」タブをクリック
   - 「Builds & deployments」セクションを開く

5. **デプロイコマンドを修正**

   **オプション1: 無害なコマンド（推奨）**
   ```
   true
   ```
   または
   ```
   echo "Deploy skipped - using wrangler.toml"
   ```

   **オプション2: wrangler deployコマンドを実行**
   ```
   npx wrangler deploy
   ```
   
   **注意**: オプション2の場合、`wrangler.toml`の設定が自動的に使用されます。

6. **保存**
   - 「Save」ボタンをクリック

7. **再デプロイ**
   - 「Deployments」タブに戻り、新しいデプロイをトリガー

## 完全な設定例

### Build & deployments 設定

- **Build command**: `npm run build:cloudflare`
- **Build output directory**: `.vercel/output/static`
- **Deploy command**: `true` または `npx wrangler deploy`
- **Root directory**: `/` (プロジェクトルート)

## wrangler.tomlの確認

プロジェクトルートの`wrangler.toml`ファイルで以下が設定されていることを確認：

```toml
name = "animehub-contest"
compatibility_date = "2025-12-15"
compatibility_flags = ["nodejs_compat"]

main = ".vercel/output/static/_worker.js/index.js"
assets = { directory = ".vercel/output/static" }
```

## トラブルシューティング

### エラー: Permission denied

- デプロイコマンドが `/` や空文字列になっている
- **解決**: `true` または `npx wrangler deploy` に変更

### エラー: The directory specified by the "assets.directory" field does not exist

- ビルドコマンドが `npm run build` になっている
- **解決**: `npm run build:cloudflare` に変更

### デプロイが成功しない

1. ビルドログを確認し、`.vercel/output/static/_worker.js/index.js` が生成されているか確認
2. `wrangler.toml`の設定が正しいか確認
3. Cloudflare Dashboardの設定を再確認

## 次のステップ

設定を変更した後：

1. 新しいデプロイをトリガー
2. ビルドログを確認（`npm run build:cloudflare`が成功しているか）
3. デプロイログを確認（エラーがないか）

これで正常にデプロイできるようになります。

