

import { Link } from "react-router-dom";
import "./home.scss"
function Home(){
    return(
        <>
        <div className="Homewrap">
        <h2 className="Home"> <div className="Home__header">Quick Start</div> </h2>
        <div className="Home__des">Luyện tập, ôn luyện, kiểm tra và xem kết quả những phần đã làm</div>
        <div className="Homewrap__trust">
            <div><img src="https://quizizz.com/wf/assets/64c5f50a4898da1574f4e06b_LogosQFW-p-500.png" alt=""/></div>
            <div className="Homewrap__desc">Mang lại niềm vui cho các khóa đào tạo của công ty với <span className="Homewrap__desc1">Quizz cho công việc</span>
           <div><Link to="/topic" > <button  className="Homewrap__btn">Khám Phá</button></Link></div> </div>
        </div>
        <div className="Homewrap__img"><img src="https://quizizz.com/wf/assets/6501a46f763d217ede2fac83_LOGOs_hidef-p-1080.webp"/></div>
        {/* <div className="Home__topic">
            <div className="Home__topic-1"> HTML
                <div className="Home__topic-item1">Tạo khung xương</div>
            </div>
            <div className="Home__topic-2"> CSS3
                <div className="Home__topic-item2">Giúp trang web sinh động màu sắc</div>
            </div>  
              <div className="Home__topic-3">JavaScript
                <div className="Home__topic-item3">Tạo tự tương tác giữa người dùng với website</div>
            </div>   
             <div className="Home__topic-4">ReactJs
                <div className="Home__topic-item4" >Giúp tạo 1 trang web nhanh và hiệu quả</div>
            </div>   
             
        </div> */}
     
        </div>
        
      
        </>
    )
}
export default Home;