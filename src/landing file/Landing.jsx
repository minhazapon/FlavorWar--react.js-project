import BannerLanding from "./BannerLanding";
import Menu from '../home files/Menu'
import Date from "./Date";
import Our from "./Our";
import The from "./The";
import Blog from "./Blog";
import Join from "./Join";



const Landing = () => {
    return (
        <div>

            <BannerLanding></BannerLanding>
            <Menu></Menu>
            <Date></Date>
            <Our></Our>
            <The></The>
            <Blog></Blog>
            <Join></Join>
            
        </div>
    );
};

export default Landing;