
import { checkExist, register } from "../../services/userService";
import "../Login/login.scss";
import { Spin } from "antd";

import { generateToken } from "../../helpers/generateToken";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
    const navigate = useNavigate();
    const [xoay, setXoay] = useState(false);

    const handleSubmit = async (e) => {
        setXoay(true)
        e.preventDefault();
        // console.log(e.target[0].value, e.target[1].value);
        const fullname = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const checkExistEmail = await checkExist("email", email)
        if (checkExistEmail.length > 0) {
            alert("Email đã tồn tại!");
            setXoay(false);
        } else {
            
            const options = {
                fullname: fullname,
                email: email,
                password: password,
                token: generateToken()


            };
            const response = await register(options);
            if (response) {
                setXoay(false);
                navigate("/login")
                alert("Đăng ký thành công")
            } else {;
                setXoay(false);
                alert("Đăng ký không thành công")

            }
        }



    }
    return (
        <>
            {/* <form onSubmit={handleSubmit}>
                <h2>Đăng ký</h2>
                <div>
                    <input placeholder="Nhập họ tên" type="text" />
                </div>
                <div>
                    <input placeholder="Nhập email" type="email" />
                </div>
                <div>
                    <input type="password" placeholder="Nhập mật khẩu" />
                </div>
                <button type="submit">Đăng ký</button>
            </form> */}

            <Spin spinning={xoay} tip="vui lòng chờ...">
                <form className="form__login" onSubmit={handleSubmit}>
                    <div>
                        <h2 className="form__h2">Đăng ký</h2>
                        <div><div>
                            <input className="form__login-name" placeholder="Nhập họ tên" type="text" />
                        </div></div>
                        <div>
                            <input required className="form__login-account" placeholder="Nhập email" type="email" />
                        </div>
                        <div>
                            <input required className="form__login-pass" type="password" placeholder="Nhập mật khẩu" />
                        </div>
                        <button className="form__login-submit" type="submit">Đăng ký</button>
                    </div>

                </form>
            </Spin>



        </>
    )
}
export default Register;