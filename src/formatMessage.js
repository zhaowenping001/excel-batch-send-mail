
function formatData(rowData) {
    const htmlContent = `
        <p>你好 ${rowData.姓名}:</p>
        <p>以下是您本月的绩效：</p>
        <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse;">
            <thead>
                <tr>
                    ${Object.keys(rowData).filter(item=> item !== 'Email').map(key => `<th>${key}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
                    <tr>
                        ${Object.keys(rowData).filter(item=> item !== 'Email').map(key => `<td>${rowData[key]}</td>`).join('')}
                    </tr>
            </tbody>
        </table>
    `;
    return htmlContent;
}
module.exports = {formatData}