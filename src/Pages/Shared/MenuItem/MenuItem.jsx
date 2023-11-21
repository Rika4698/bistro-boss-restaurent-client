

const MenuItem = ({item}) => {
    const {name, image, price, recipe}=item;
    return (
        <div className="flex space-x-4">
            <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}------------</h3>
                <p>{recipe}</p>
            </div>
            <h3 className="text-[#BB8506]">${price}</h3>
        </div>
    );
};

export default MenuItem;