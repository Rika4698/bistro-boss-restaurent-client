import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({items,title,img}) => {
    return (
        <div className="pt-8">
            {
               title && <Cover img={img} title={title}></Cover>
            }
           <div className="grid md:grid-cols-2 gap-10 mx-28 my-16">
           {
             items.map(item => <MenuItem
             key={item._id} item={item}
             ></MenuItem> )
           }
            </div> 
            <div className="text-center mt-6">
           <button className="btn btn-outline uppercase text-black border-0 border-b-4 border-b-black  mt-4 ">ORDER YOUR FAVOURITE FOOD</button> 
           </div> 
        </div>
    );
};

export default MenuCategory;