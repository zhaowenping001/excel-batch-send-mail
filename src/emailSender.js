// src/emailSender.js
/**
 * 配置好发送者邮箱地址 密码，等待配置
 */
const config = {
    service: 'gmail', // 那个邮箱服务器
    auth: {
        user: 'wenping.zhao001@gmail.com', // 用户名
        pass: '' //密码
    }
}

// const config = {
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // Use `true` for port 465, `false` for all other ports
//     auth: {
//       user: "maddison53@ethereal.email",
//       pass: "jn7jnAPss4f63QBp6D",
//     },
//   }

const nodemailer = require('nodemailer');


async function sendEmail(to, subject, htmlContent) {
    const transporter = nodemailer.createTransport(config);

    const mailOptions = {
        from: config.auth.user,
        to: to,
        subject: subject,
        html: htmlContent,
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('收件人邮箱响应：' + info.response);
    } catch (error) {
        console.error('发送邮件【失败】->', to);
        console.error('错误原因:', error);
    }
}

module.exports = { sendEmail };
