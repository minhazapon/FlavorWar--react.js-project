import Bites from "./Bites";
import Dessert from "./Dessert";
import GalleryBanner from "./GalleryBanner";
import Hot from "./Hot";
import Story from "./Story";
import Tea from "./Tea";
import Contact from '../landing file/Contact'




const Gallery = () => {
    return (
        <div>

            <GalleryBanner></GalleryBanner>
            <Bites></Bites>
            <Hot></Hot>
            <Story></Story>
            <Dessert></Dessert>
            <Tea></Tea>
            <Contact></Contact>
            
        </div>
    );
};

export default Gallery;