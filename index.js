// src/index.js
const path = require('path');
const { readExcel } = require('./src/excelReader');
const { sendEmail } = require('./src/emailSender');

const { formatData } = require('./src/formatMessage')

async function processExcelAndSendEmails(filePath) {
    const data = readExcel(filePath);

    console.log('开始遍历数据',filePath)
    for (const row of data) {
        const email = row.Email; // 表格中的 需要有"Email" 列包含用户的邮箱地址
        if(!email) continue;
        const message = formatData(row);
        // 邮件主题信息
        const mailSubject = '个人绩效'
        try {
            await sendEmail(email, mailSubject, message);
            console.log(`Email sent to:${row.姓名} -> ${email}`);
        } catch (error) {
            console.error(`Failed to send email to: ${row.姓名} -> ${email}`);
        }
    }
}

// 从命令行参数获取文件路径
const filePath = process.argv[2];

if (!filePath) {
    console.error('请提供excel路径:');
    process.exit(1);
}

// 处理 Excel 文件并发送邮件
processExcelAndSendEmails(path.resolve(filePath));
