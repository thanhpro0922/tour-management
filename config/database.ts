import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
    process.env.DATABASE_NAME, //! Tên database
    process.env.DATABASE_USERNAME, //! user đăng nhập
    process.env.DATABASE_PASSWORD, //! mật khẩu
    {
        host: process.env.DATABASE_HOST, //! link hosting, sau này đổi thành link khác sau
        dialect: "mysql",
    }
);

sequelize
    .authenticate()
    .then(() => {
        console.log("Connect success.");
    })
    .catch((error) => {
        console.error("Connect error", error);
    });

export default sequelize;
