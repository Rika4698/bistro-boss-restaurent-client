import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../Components/Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const offer = menu.filter(item=>item.category === 'offered');
    const dessert = menu.filter(item=>item.category === 'dessert');
    const pizza = menu.filter(item=>item.category === 'pizza');
    const salad = menu.filter(item=>item.category === 'salad');
    const soup = menu.filter(item=>item.category === 'soup');
    
    return (
        <div>
           <Helmet>
        <title>BISTRO BOSS | Our Menu</title>
      </Helmet> 
      <Cover img={menuImg} title='our menu'></Cover>
      <SectionTitle subHeading={"Don't miss"}  heading={"TODAY'S OFFER"}></SectionTitle>
      <MenuCategory items={offer}></MenuCategory>
      <MenuCategory items={dessert} title="dessert" img={dessertImg}></MenuCategory>
      <MenuCategory items={pizza} title="PIZZA" img={pizzaImg}></MenuCategory>
      <MenuCategory items={salad} title="SALADS" img={saladImg}></MenuCategory>
      <MenuCategory items={soup} title="SOUPS" img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;