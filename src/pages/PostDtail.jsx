// Router Link..................
import { Link } from 'react-router-dom'
// Coponent.....................
import PostAuthor from '../components/PostAuthor'

// PostDtail image................
import postDtailImage from '../assets/16.jpg'

export default function PostDtail() {
  return (
    <section>
      <div className="container PostDtail-container">
        <div className="postdtail-top">
          <PostAuthor />      
            <div className="postdtail-buttons">
              <Link to={'/posts/werwer/edit'} className='btn btn-sm btn-primary'>
                Edit
              </Link>
              <Link to={'/posts/werwer/delete'} className='btn btn-sm btn-danger'>
                Delete
              </Link>         
            </div>
        </div>
        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
        <div className="postdtail-image">
          <img src={postDtailImage} alt="" />
        </div>
        <div className="post-detail-para">
          <p>
            Meet Alex, a passionate programmer and technology enthusiast who thrives on turning lines of code into innovative solutions. With a keen eye for detail and a knack for problem-solving, Alex enjoys navigating through the complexities of programming languages and frameworks.
          </p>
          <p>
            When not immersed in coding challenges, Alex loves exploring the latest trends in the tech world. From web development to app design, this coding virtuoso is always on the lookout for ways to enhance the user experience and create seamless digital experiences.
          </p>
          <p>
            Whether it's debugging a complex algorithm or brainstorming creative solutions, Alex approaches every coding endeavor with dedication and a dash of curiosity. Join the journey as we delve into the fascinating world of programming through the lens of Alex's unique perspective.
          </p>
        </div>
              
      </div>
    </section>
  )
}
