import { useNavigate } from "react-router-dom";
import { login } from "../../services/userService";
import { setCookie } from "../../helpers/cookies";
import { useDispatch, useSelector } from "react-redux";
import { checkLogin } from "../../actions/login";

import "./login.scss";

import { Spin } from "antd";
import { useState } from "react";

function Login() {
    const islogin = useSelector(state => state.loginReducer)
    const navigate = useNavigate();
    const [xoay, setXoay] = useState(false);
    const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        setXoay(true);
        e.preventDefault();
        // console.log(e.target[0].value, e.target[1].value);
        const email = e.target[0].value;
        const password = e.target[1].value
        const response = await login(email, password);
        if (response.length > 0) {
            setXoay(false)
            // console.log(response);
            setCookie("id", response[0].id, 100)
            setCookie("fullname", response[0].fullname, 100)
            setCookie("email", response[0].email, 100)
            setCookie("token", response[0].token, 100)
            if (islogin === false) {
                dispatch(checkLogin(true)) // đã sửa chỗ này (BAN ĐẦU KO CÓ IF) lý do: cái state đó phải thay đổi để load trang.nếu ko có if thì bấm login state sẽ là true, nhưng khi bấm load trang state sẽ quay về gtri ban đầu là false, xong bấm đăng xuất cũng set state là false nên state ko thay đổi (ko load lại)
            } else {
                dispatch(checkLogin(false))
            }

            navigate("/")
        } else {
            setXoay(false)
            alert("Sai tài khoản hoặc mật khẩu")
        }

    }
    return (
        <>
            <Spin spinning={xoay} tip="vui lòng chờ...">
                <form className="form__login" onSubmit={handleSubmit}>
                    <div>
                        <h2 className="form__h2">Đăng nhập</h2>
                        <div><img className="form__login-icon" src="https://thanhnien.mediacdn.vn/uploaded/dangkhoa/2021_02_18/hinh1a-emoji_PRHW.jpg?width=500" alt="d" /></div>
                        <div>
                            <input required className="form__login-account" placeholder="Nhập email" type="email" />
                        </div>
                        <div>
                            <input required className="form__login-pass" type="password" placeholder="Nhập mật khẩu" />
                        </div>
                        <button className="form__login-submit" type="submit">Đăng nhập</button>
                    </div>

                </form>

            </Spin>

        </>
    )
}
export default Login;