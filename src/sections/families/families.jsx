import cardImage from '../../assets/familySectionImage.png';
import style from "./families.module.css";

export default function FamilySection(){

    return(
        <div className={style.sectionWrapper}>
            <div className={style.sectionText}>
                <p>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</p>
                <h1>Our Families</h1>
                <span>We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</span>
            </div>
            <div className={style.sectionImage}>
                <img src={cardImage} alt="familyCard"></img>
            </div>
        </div>
    )
}