import '../styles/blogs.scss';
import img_1 from '../assets/image-section-one.png';
import img_2 from '../assets/image-section-two.png';
import img_3 from '../assets/image-section-three.png';
import { PointsProps } from '../modal';

const BlogDetails:PointsProps[] = [
    {
        id: 1,
        title: "Timely alerts & sync ups",
        description: "Pick winning stocks confidently with 130+ filters or create your own goal-based screens.",
        img: img_1
    },
    {
        id: 2,
        title: "Timely alerts",
        description: "Pick winning stocks confidently with 130+ filters or create your own goal-based screens.",
        img: img_2
    },
    {
        id: 3,
        title: "Timely alerts & sync ups",
        description: "Pick winning stocks confidently with 130+ filters or create your own goal-based screens.",
        img: img_3
    }
];

export const Blogs = () => {
    return (
        <div className="container">
            <h1 className='blog_title'>Blogs and Newsroom Updates</h1>
            <p className='blog_para'>community for India's investors hang out and talk about investers, personal finance</p>
            <div className="blog-container">
                {BlogDetails.map((blog, index) => (
                    <div key={index} className="blog_card" 
                         style={{ backgroundImage: `url(${blog.img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                        <div>
                            <h2>{blog.title}</h2>
                            <p>{blog.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
