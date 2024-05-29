import blogImage from '../../assets/blogImage.png';
import blogDoc from '../../assets/blogDoc.png';

import style from './news.module.css';

export default function Blog(){
    return(
        <div className={style.blogWrapper}>
            <p>Blog & News</p>
            <h1>Read Our Latest News</h1>

            <div className={style.blogs}>
                <div className={style.card}>
                    <div className={style.image}>
                        <img src={blogImage} alt="blogImg"/>
                    </div>
                    <div className={style.cardContent}>
                        <span>Medical | March 31, 2024</span>
                        <h3>6 Tips To Protect Your Mental Health When You’re Sick</h3>
                        <div className={style.author}>
                            <img src={blogDoc}></img>
                            <span>Rebecca Lee</span>
                        </div>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.image}>
                        <img src={blogImage} alt="blogImg"/>
                    </div>
                    <div className={style.cardContent}>
                        <span>Medical | March 31, 2024</span>
                        <h3>6 Tips To Protect Your Mental Health When You’re Sick</h3>
                        <div className={style.author}>
                            <img src={blogDoc}></img>
                            <span>Rebecca Lee</span>
                        </div>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.image}>
                        <img src={blogImage} alt="blogImg"/>
                    </div>
                    <div className={style.cardContent}>
                        <span>Medical | March 31, 2024</span>
                        <h3>6 Tips To Protect Your Mental Health When You’re Sick</h3>
                        <div className={style.author}>
                            <img src={blogDoc}></img>
                            <span>Rebecca Lee</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}