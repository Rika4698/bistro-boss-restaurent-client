import { Parallax } from 'react-parallax';

const Cover = ({img,title}) => {
    return (
       
            <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
       <div className="hero h-[600px]" >
  <div className=" "></div>
  <div className="hero-content text-center text-white ">
    <div className="w-[650px] h-[250px] bg-black bg-opacity-50 mt-10">
      <h1 className="mb-5 mt-20 text-5xl font-bold uppercase">{title}</h1>
      <p className="mb-5">Would you like to try a dish?</p>
      
    </div>
  </div>
</div> 
    </Parallax>
           
       
    );
};

export default Cover;