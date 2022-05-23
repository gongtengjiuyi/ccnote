import './hot.css'
import { Button } from 'antd';
function Hot() {
    return (
        <div className="hot">
            <div className="pannel">
                <div className="header">CNode：Node.js专业中文社区</div>
                <div className='pannel-body' style={{ fontSize: '13px' }}>
                    你可以
                    <a href="#">登录</a>
                    或
                    <a href="#">注册</a>
                    ，也可以
                    <a href=""><Button type="primary" style={{ 'backgroundColor': '#5bc0de', 'border': 'none' }}>通过github登录</Button></a>
                </div>
            </div>
            <div className='pannel'>
                <div className="header">
                    无人回复的话题
                </div>
                <div className="pannel-body">
                    <p>next.js打包出错</p>
                    <p>next.js打包出错</p>
                    <p>next.js打包出错</p>
                </div>
            </div>
            <div className='pannel'>
                <div className="header">
                    积分榜    TOP 100>>
                </div>
                <div className="pannel-body">
                    <p>next.js打包出错</p>
                    <p>next.js打包出错</p>
                    <p>next.js打包出错</p>
                </div>
            </div>
        </div>
    )
}
export default Hot