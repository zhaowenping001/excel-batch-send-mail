***node 开发版本14.21.3***

1. npm install

**准备内容：**

    excel表格第一个 sheet中  有一列Email的title的列；列出这一行数据 收件者的 email地址；

    在src/emailSender.js 文件中配置好发送者的邮箱配置**

    注意发送者邮箱配置这里可能会遇到安全权限问题，查看对应邮箱服务器的原因

 项目运行方式：
2. node ./index.js [/your/excel-file.xlsx] 或者 npm run start (修改start命令的excel地址)