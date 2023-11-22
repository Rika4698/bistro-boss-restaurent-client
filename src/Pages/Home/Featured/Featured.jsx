import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import './Featured.css';


const Featured = () => {
    return (
        <div className="featured-item  text-white bg-fixed   pt-8 my-20" >
           <SectionTitle subHeading={'Check it out'} heading={'FROM OUR MENU'}>
            </SectionTitle> 
            <div className="md:flex justify-center items-center pb-20 bg-slate-700 bg-opacity-40 pt-12 px-36">
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div className="md:ml-10">
                    <h3>March 20, 2023</h3>
                    <h3 className="uppercase">WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, natus at, perferendis necessitatibus cupiditate error dignissimos sequi obcaecati, iusto recusandae dolores? Ut totam neque delectus adipisci, necessitatibus reprehenderit fugiat. Quibusdam.</p>
                    <button className="btn btn-outline text-white uppercase border-0 border-b-4 border-b-white mt-4">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;