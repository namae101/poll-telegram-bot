const { config } = require("../../config");
const moment = require("moment-timezone");

const resolve = ({ ctx }) => {
  ctx.replyWithPoll(
    `ស្ថិតិចំនួនសមាជិកដែលបានបំពេញ Form តាមដានសុខភាព និងរាយការណ៍ប្រចាំថ្ងៃដើម្បីទប់ស្កាត់ COVID-19 \n${moment()
      .locale("km")
      .tz("Asia/Phnom_Penh")
      .format("LL")}\nសូម 🙏 Tick លើ:
    `,
    ["បានបំពេញរួចហើយ", "មិនទាន់បានបំពេញ"],
    {
      is_anonymous: false
    }
  );
};

module.exports = {
  resolve,
  command: "poll"
};
