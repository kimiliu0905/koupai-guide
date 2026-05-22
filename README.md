# 扣排打卡教程中心

这是扣排 + 打卡教程站的独立静态项目。

当前阶段目标：先验证公网分享链路，确保同一个链接可以被手机和电脑访问。

## 本地预览

可直接双击 `index.html` 打开，也可以在目录下启动任意静态服务。

## Cloudflare Pages 发布建议

1. 新建一个独立 Git 仓库，例如 `koupai-guide`。
2. 将本目录内容提交到仓库。
3. 登录 Cloudflare，进入 Pages，选择 Connect to Git。
4. 选择该仓库。
5. 构建配置保持静态站默认值：
   - Framework preset: None
   - Build command: 留空
   - Build output directory: `/`
6. 发布完成后，Cloudflare 会生成一个 `*.pages.dev` 公网地址。

## Step 1 验收标准

- 电脑浏览器能打开 Cloudflare Pages 生成的公网链接。
- 手机浏览器能打开同一个公网链接。
- 把链接发给他人后，对方无需登录即可阅读。
