import React from 'react'
import classes from './team.module.css'
// import img from './kanhaiya.jpg'
// import img1 from './Bhargava.jpg'

const Team = () => {
    const data = [
        {
            id: 1,
            image: "https://res.cloudinary.com/dulzutyqm/image/upload/v1709797956/IMG-20240307-WA0005_fjxate.jpg",
            name: "Jayesh Tapdiya",
            pos: "Full-Stack Developer",
            linkdin: "https://www.linkedin.com/in/jayesh-tapdiya-01573024a/",
            gmail: "mailtto:jayesh121220@gmail.com",
            github: "https://github.com/jayeshtapdiya",
        },
        {
            id: 2,
            image: '',
            name: "Kanhaiya Soni",
            pos: "Front-End Developer",
            linkdin: "https://www.linkedin.com/in/kanhaiya-soni-b78baa220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
            gmail: "mailto:Kanhaiyasoni0212@gmail.com",
            github: "https://github.com/kanhaiya-2001",
        },
        {
            id: 3,
            image: '',
            name: "Hritik Bhargava",
            pos: "Back-End Developer",
            linkdin: "https://www.linkedin.com/in/hritik-bhargava-55ba611b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            gmail: "mailtto:jayesh121220@gmail.com",
            github: "https://github.com/hritikbhargava1256",
        }
    ]

    return (
        <div>
            <div className={classes.leaderboard_section}>
                <h1 className={classes.heading}>Developers</h1>

                <div className={classes.home_container}>
                    {/* isme mei map lagana hai */}
                    {data.map((ele, id) => {
                        return (
                            <div className={classes.profile_card} key={ele.id}>
                                <div className={classes.img}>
                                    <img src={ele.image} alt="Profile" />
                                </div>
                                <div className={classes.caption}>
                                    <h3>{ele.name}</h3>
                                    <p>{ele.pos}</p>
                                    <div className={classes.social_links}>
                                        {/* linkdin */}
                                        <a href={ele.linkdin} target="_blank" rel="noopener noreferrer" className={classes.footer_a_link}>
                                            <img src="https://res.cloudinary.com/dulzutyqm/image/upload/v1709616689/linkedin-circled--v1_jignzr.png " alt="" />
                                        </a>

                                        {/* gamil */}
                                        <a href={ele.gmail} target="_blank" rel="noopener noreferrer" className={classes.footer_a_link}>
                                            <img src="https://res.cloudinary.com/dulzutyqm/image/upload/v1709617445/t_500x300_znjzks.jpg " alt="" />
                                        </a>

                                        {/* github */}
                                        <a href={ele.github} target="_blank" rel="noopener noreferrer" className={classes.footer_a_link}>
                                            <img src="https://res.cloudinary.com/dulzutyqm/image/upload/v1709617630/icons8-github-30_l91dpj.png  " alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Team
